const http = require('http');
const fs = require('fs');


http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'});
     fs.readFile('./shee.html',null , (error ,data)=>{
        if(error) return;
        else{
            res.write(data);
        }
        res.end();
     })
   
}).listen(3020, ()=>{
    console.log('Running Service on Port : 3020');
});
