var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    _product : {type: Schema.Types.ObjectId, ref: 'Product', required: true },
    _customer : {type: Schema.Types.ObjectId, ref: 'Customer', required: true },
    quantity : {type: Number, min: 0, required: true }
}, {timestamps: {createdAt: 'created_at'}});

var Order = mongoose.model('Order', OrderSchema);
