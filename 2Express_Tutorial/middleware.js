// Middleware exists because many tasks need to happen before your route handler runs,
//  and you don't want to repeat the same code in every route
//application
//Check if a user is logged in before allowing access:

const express = require('express')

const app = express()


// req => middleware => res

const logger = (req , res , next) => {
     const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method , url , time)
    next()

}

app.get('/' ,logger , (req,res) => {
    // const method = req.method
    // const url = req.url
    // const time = new Date().getFullYear()
    // console.log(method , url , time)
    res.send('<h1>Home</h1>')
})

app.get('/about',logger , (req,res) => {
    res.send('<h1>About</h1>')
})



app.listen(5000, () => {
    console.log('hello server is listening on 5000')
})