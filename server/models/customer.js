var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
    name: {type: String, minlength: 1, required: true, unique: true},
    _orders : [{type: Schema.Types.ObjectId, ref:'Order'}]
},{ timestamps: { createdAt: 'created_at' } });

var Customer = mongoose.model('Customer', CustomerSchema);
