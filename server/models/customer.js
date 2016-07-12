var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
  name: String,
  created_at: String
});
mongoose.model('Customer', CustomerSchema);
