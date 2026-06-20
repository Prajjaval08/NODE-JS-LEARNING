const express = require('express')


const app = express()

app.get('/' ,(req,res) => {
    res.status(200).json([{name : 'john'}, {name :'tom'}])
})


app.listen(5000 ,  ()=>{
   console.log('hello server is listening on 5000')
})