const express = require('express')

const app = express()

const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res


app.use([authorize ,logger])

app.get('/'  , (req,res) => {
    // const method = req.method
    // const url = req.url
    // const time = new Date().getFullYear()
    // console.log(method , url , time)
    res.send('<h1>Home</h1>')
})

app.get('/about' , (req,res) => {
    res.send('<h1>About</h1>')
})

app.get('/api/products' , (req,res) => {
    res.send('Products')
})
app.get('/api/items' , (req,res) => {
    res.send('Items')
})


app.listen(5000, () => {
    console.log('hello server is listening on 5000')
})