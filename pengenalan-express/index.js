const express = require('express')

const app = express()

app.get('/about', function(req, res, next) {
    console.log(req.query)
    res.send({success: true, keyword:req.query.keyword})
})

app.get('/txt-response', function(req, res, next) {
    res.send('Hello world!')
})

app.get('/product/:productId', function(req, res, next) {
    res.send({success: true, productId:req.query.productId})
})

app.get('/category/:productCategory/product/:productId', function(req, res, next) {
    res.send(req.params)
})

app.get('/error', function(req, res, next) {
    next(new Error('contoh error'))
})

app.get('.multi-handler', function(req, res, next){
    if(req.query.keyword === 'satu'){
        return next()
    }
    return res.send('keyword harus satu')
}, function(req, res, next) {
    res.send('Sukses')
})

app.use((err, req, res, next) => {
    console.log(err)
    res.send('terjadi error')
})
app.listen(8000, function(){
    console.log('App listen on port 8000')
})


