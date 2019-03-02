


const http = require('http')
const fs = require('fs')

const server = http.createServer();

/*

on request

 by path
 by http-methods
 by headers
 by params

on response

html,json, or media-type


*/

server.on('request', (req, res) => {
    let url = req.url;
    let httpMethod = req.method;
    res.write(`${httpMethod} ${url}`)
    res.end();
});

server.listen(3000, () => {
    console.log("server at http://localhost:3000/");
})



