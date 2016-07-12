
var mongoose = require('mongoose');
var Product = mongoose.model('Product');
module.exports = (function() {
 return {
  index: function(req, res) {
     Product.find({}, function(err, results) {
       if(err) {
         console.log(err);
       } else {
         res.json(results);
       }
    })
  },
  findQuantity: function(req, res) {
    console.log(req.body.quantity);
    Product.find({_id: req.body.product_id}, function(err, results) {
      if(err) {
        console.log(err);
      } else {
        res.json(results);
      }
    })
  },
  remove: function(req, res) {
    console.log(req.body);
  }
 }
})();

