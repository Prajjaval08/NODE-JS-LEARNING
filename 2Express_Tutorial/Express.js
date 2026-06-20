const express = require('express')


const app = express()


//app.get --read data
//app.post  -- send data
//app.put , delete , all , listen ,use

app.get( '/' , (req,res) => {
   return res.status(200).send('we are returning to home page ')
     
})
app.get( '/about' , (req,res) => {
   return res.send('we are in about   page ')
     
})
app.all('*' ,(req,res) => {
   res.status(404).send('<h1>i m default</h1>')
})
app.listen(5000 ,  ()=>{
   console.log('hello server is listening on 5000')
})