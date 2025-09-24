import express from 'express'
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';
import cors from 'cors';





const app = express();
const server = createServer(app);
const io = new Server(server,{
    connectionStateRecovery:{}
});

const _dirname=dirname(fileURLToPath(import.meta.url))

app.use(cors({
    origin: 'http://localhost:3000', // or your frontend port
    methods: ['GET', 'POST']
}));

app.get("/",function(req,res){
    res.sendFile(join(_dirname,'index.html'));
});

//mapping user with socket id
const users=new Map<string,string>();

io.on('connection',(socket) =>{
    console.log("a new user connected:",socket.id)

    //register username
    socket.on('register', (username:string)=>{
        users.set(username, socket.id);
        console.log(`registered user : ${username} ->${socket.id}`);
        socket.data.username=username;
    })

    //handling private messages
    socket.on('private message',({messageText,receipient})=>{
        const toSocketId=users.get(receipient);
        if(toSocketId){
            io.to(toSocketId).emit('private message', {
                from: socket.data.username || 'unknown', messageText
            });
        }
        else{
            console.log(`user ${receipient} not found`);
        }

    })


//cleanup on disconnect
socket.on('disconnect', ()=>{
    for(const [username,id] of users.entries()){
        if (id===socket.id){
            users.delete(username);
            console.log(`user ${username} disconnected`);
            break;
        }
    }  
})
})

server.listen(3001,()=>{
    console.log("server running");
})