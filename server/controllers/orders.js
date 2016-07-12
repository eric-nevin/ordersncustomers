
var mongoose = require('mongoose');
var Order = mongoose.model('Order');
module.exports = (function() {
 return {
  index: function(req, res) {
     Order.find({}, function(err, results) {
       if(err) {
         console.log(err);
       } else {
         res.json(results);
       }
   })
  },
  add: function(req, res) {
    Order.create(req.body, function(err, results){
      if(err){
        console.log(err);
      } else {
        Order.find({}, function(err, results){
          if(err) {
            console.log(err);
          } else {
            res.json(results);
          }
        })
      }
    })
  },
  delete: function(req, res) {
    Order.remove({_id: req.body._id }, function(err, results){
      if(err){
        console.log(err);
      } else {
        Order.find({}, function(err, results){
          if(err){
            console.log(err);
          } else {
            res.json(results);
          }
        })
      }
    })
  }
 }
})();

