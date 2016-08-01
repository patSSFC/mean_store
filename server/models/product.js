var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: {type: String, required: true},
    itemCount: {type: Number, required: true },
    description: {type: String, maxlength: 256}
});

var Product = mongoose.model('Product', ProductSchema);
