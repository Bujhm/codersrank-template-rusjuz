
const fs = require('fs');
const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    console.log(request.url);
    fs.readFile(request.url.substr(1), function(error,data){
        if (error){
            response.writeHead(404);
            response.write('File NOT found');
        } else {
            // if all files were html only then ... it may would be resonable
            //response.writeHead(200, {"Content-Type": "text/html"});
            response.write(data);
        }
        response.end();
    });
    
}

const server = http.createServer(requestHandler)
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }    console.log(`server is listening on ${port}`)
})

