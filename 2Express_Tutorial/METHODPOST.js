const express = require('express')

const app = express()

let {people} = require('./data')

app.use(express.static('./method-public'))
app.use(express.urlencoded({extended :false}))

app.get('/api/people' ,(req,res) => {
    res.status(200).json({success : true , data : people})
})

app.post('/login' ,(req,res) => {
    console.log(req.body)
    res.send('POST')
})


app.listen(5000, () => {
    console.log('hello server is listening on 5000')
})