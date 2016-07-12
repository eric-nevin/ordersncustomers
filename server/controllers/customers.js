
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
module.exports = (function() {
 return {
  index: function(req, res) {
     Customer.find({}, function(err, results) {
       if(err) {
         console.log(err);
       } else {
         res.json(results);
       }
   })
  },
  add: function(req, res) {
    Customer.create(req.body, function(err, results){
      if(err){
        console.log(err);
      } else {
        Customer.find({}, function(err, results){
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
    Customer.remove({_id: req.body._id }, function(err, results){
      if(err){
        console.log(err);
      } else {
        Customer.find({}, function(err, results){
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

