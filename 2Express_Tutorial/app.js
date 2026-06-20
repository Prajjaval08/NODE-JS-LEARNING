const http = require('http')
const {readFileSync} = require('fs')

// get all files 

const homepage = readFileSync('./Nav-BarAPP/index.html')
const homeStyles = readFileSync('./Nav-BarAPP/styles.css')

const homeImage = readFileSync('./Nav-BarAPP/logo.svg')

const homeLogic = readFileSync('./Nav-BarAPP/browser-app.js')


const server = http.createServer((req,res)=> {
    console.log('hallo')
   // writeHead() is used to send the HTTP status code and
   //  response headers before sending the response body.

    const url = req.url
    // console.log(url)
   
    if(url === '/'){
        res.writeHead(200 , {'content-type': 'text /html'})
       res.write(homepage)
       console.log('we are in home page')
       res.end()
    }
    else if(url === '/styles.css'){
       res.writeHead(200 , {'content-type': 'text /css'})
       res.write(homeStyles)
       console.log('we are in about page')
       res.end()
    }

     else if(url === '/logo.svg'){
       res.writeHead(200 , {'content-type': 'image /svg + xml'})
       res.write(homeImage)
       console.log('we are in about page')
       res.end()
    }
     else if(url === '/browser-app.js'){
       res.writeHead(200 , {'content-type': 'text / javascript'})
       res.write(homeLogic)
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