const mongoose = require('mongoose');


const todoSchema = mongoose.Schema({
    title: {type: String, required: true, default: 'Hello'},
    name: {type: String, required: true},
    url: {type: String, required: true, default: "src/assets/images/products/placeholder.png"},
    unit_price: {type: String},
    category_id: {type: String},
    id:{type: String},
    description: {type: String},
    my_id: {type: String}
})

module.exports = mongoose.model('product', todoSchema);