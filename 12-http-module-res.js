const http = require('http');


//port
server.listen(5000);


const http = require('http');

// create server

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("welcome to our home page");
        return;
    }
    if(req.url === '/about'){
        res.end("This is our short history");
        return;
    }
    res.end(
        `<h1>Oops!</h1>
        <p>We could not find what you are looking for</p>
        <a href="/">back home</a>
        `
    )
})