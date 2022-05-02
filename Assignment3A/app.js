const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) =>{
        if(err){
            res.writeHead(404);
            res.end(err);
        }
        res.writeHead(200);
        res.end(data);
    })
}).listen(3000);