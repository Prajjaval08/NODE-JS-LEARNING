const http = require('http')

const server = http.createServer((req,res)=> {
    console.log('hallo')
   // writeHead() is used to send the HTTP status code and
   //  response headers before sending the response body.

    const url = req.url
   
    if(url == '/'){
        res.writeHead(200 , {'content-type': 'text /html'})
       res.write('<h1> Home Page</h1>')
       console.log('we are in home page')
       res.end()
    }
    else if(url === '/about'){
       res.writeHead(200 , {'content-type': 'text /html'})
       res.write('<h1> About Page</h1>')
       console.log('we are in about page')
       res.end()
    }
     else{
         res.writeHead(404 , {'content-type': 'text /html'})
       res.write('<h1> Home Page</h1>')
       console.log('we are in Default home page')
       res.end()
     }
    
})

server.listen(5000)