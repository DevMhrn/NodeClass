const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    if(req.url === '/login'){
        res.write('<html> <head> <title> Login Page</title> </head> <body> <h1>Login Page</h1> </body> </html>')
        
    }
    else{
        res.write('<html> <head> <title>My First Page</title> </head> <body> <h1>Hello World!</h1> </body> </html>');
        

    }
    res.end();
    
})
const port = 3002;
const host = 'localhost';

server.listen(port, host, ()=>{
    console.log(`Server is running at http://${host}:${port}`);
});


//create a server 