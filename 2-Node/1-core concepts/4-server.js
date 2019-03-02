

const http = require('http')
const fs = require('fs')

const server = http.createServer();  // EE

server.on('request', (req, res) => {
    //...
    console.log('req begin')

    // res.write("Hello, welcome to Node.js world")
    // res.end();

    // non blocking IO
    console.log('Initiating IO')

    // without streams

    // fs.readFile('./videos/NG.mp4', (err, data) => {
    //     res.writeHead(200, { "Content-Type": "video/mp4" })
    //     res.write(data);
    //     res.end();
    //     console.log('req with IO finished..')
    // })

    // with stream
    let rs = fs.createReadStream('../PPT/all-levels node.pdf')
    res.writeHead(200, { "Content-Type": "video/mp4" })

    // rs.on('data', (chunk) => {
    //     console.log('data event from read-stream')
    //     res.write(chunk);
    // })
    // rs.on('end', () => {
    //     res.end();
    // })

    // or

    rs.pipe(res)

    console.log("server ready to take next request..");


})
server.listen(3000, () => {
    console.log("server at http://localhost:3000/");
})