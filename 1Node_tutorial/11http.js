const http = require('http');

const server = http.createServer((req , res) => {
if(req.url == '/'){
   return res.end('welcome to homepage')
}

if(req.url == '/about'){
   return  res.end('in about section')
}
res.end(`
    <h1> oops</h1>`)
res.write('welcome to india ')
res.end()

})

server.listen(5000)