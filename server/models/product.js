var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
  name: String,
  quantity: Number
});
mongoose.model('Product', ProductSchema);