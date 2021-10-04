const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const product = require('./schema/product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, PATCH")
    next();
})

mongoose.connect('mongodb+srv://ankit29:ankit1996@cluster0.vvs2j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
                {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
                     console.log("MongoDB Connected....");
                 }).catch(error => {
                     console.log("Not Connected");
                 })


// REST API

app.post('/api/product', (req, res, next) => {
    const todoObj = new product({
        title: req.body.title,
        name: req.body.name
    })
    todoObj.save().then(() => {
        // success call back

        res.status(200).json({
            message: "Todo saved"
        })

    }).catch(error => {
        // failure 

        res.status(400).json({
            message: "Todo not saved"
        })
    })
})

//get data by category-id
app.get('/api/products/:category_id', (req, res, next) => {
    product.find({category_id: req.params.category_id}).then(docs => {
        res.status(200).json({
            message: 'Todo fetched.',
            products: docs    
        })
    }).catch(error => {
        res.status(400).json({
            message: 'Something went wrong'
        })
    })
})

app.get('/api/products/product/:my_id', (req, res, next) => {
    product.find({my_id: req.params.my_id}).then(docs => {
        res.status(200).json({
            message: 'Todo fetched.',
            products: docs    
        })
    }).catch(error => {
        res.status(400).json({
            message: 'Something went wrong'
        })
    })
})




app.get('/api/products', (req, res, next) => {
    product.find().then(docs => {
        res.status(200).json({
            message: 'Todo fetched.',
            products: docs
        })
    }).catch(error => {
        res.status(400).json({
            message: 'Something went wrong'
        })
    })
})

//search by text
app.get('/api/search/:name', (req, res, next) => {
    var regex = new RegExp(req.params.name,'i');
    product.find({name:regex}).then(docs => {
        res.status(200).json({
            message: 'Todo fetched.',
            products: docs    
        })
    }).catch(error => {
        res.status(400).json({
            message: 'Something went wrong'
        })
    })
    
}) 
module.exports = app;                