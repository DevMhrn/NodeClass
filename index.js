const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/login') {
        const filepath = path.join(__dirname, 'index.html');
        try {
            const content = fs.readFileSync(filepath, 'utf8');
            res.write(content);
        } catch (err) {
            console.error(err);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.write('Internal Server Error');
        }
    } else {
        res.write('<html> <head> <title>My First Page</title> </head> <body> <h1>Hello World!</h1> </body> </html>');
    }
    res.end();
});

const port = 3002;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
