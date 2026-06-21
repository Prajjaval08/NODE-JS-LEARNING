//In Express, req.params is used to get values from the URL path

 //app.get('/api/products/:productID', (req, res) => {

    const express = require('express')

const app = express()

const { products } = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1> <a href="/api/products">products</a>')
})
// here we use params instead of hardcoded value
// :productID is way to write it 
app.get('/api/products/:productID', (req, res) => {

    // console.log(req)
    // console.log(req.params)
    const {productID} = req.params
    const newproducts = products.find((product) => product.id === Number(productID))
   if(!newproducts){
    return res.status(404).send('Product not exist')
   }
    res.json(newproducts)
})

app.get('/api/products/:productID/reviews/:reviewID' ,(req,res) => {
    console.log(req.params)
    res.send('hello IGI')
})

app.listen(5000, () => {
    console.log('hello server is listening on 5000')
})