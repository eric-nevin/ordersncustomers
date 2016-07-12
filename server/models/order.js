var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
  customer_id: Object,
  product_id: Object,
  quantity: Number
});
mongoose.model('Order', OrderSchema);
