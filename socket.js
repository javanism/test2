const WebSocket=require('ws');

a=(server)=>{
    //server socket....
    const wss=new WebSocket.Server({server});
    wss.on('connection',(ws,req)=>{
        const ip=req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log('새로운 클라이언트 접속: '+ip);
        ws.on('message',(message)=>{
            wss.clients.forEach((client)=>{
                if(client.readyState===WebSocket.OPEN){
                    client.send(message);
                }//end if
            });//end forEash
        });//end on
        ws.on('close',()=>{
            console.log('클라이언트 접속 해제: '+ip);
        });
        ws.on('error',(error)=>{
            console.log(error);
        });
    });
}

module.exports=a;