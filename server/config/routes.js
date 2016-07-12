  var customers = require('./../controllers/customers.js');
  var orders = require('./../controllers/orders.js');
  var products = require('./../controllers/products.js');


  module.exports = function(app) { 
    app.get('/customers', function(req, res) {
      customers.index(req, res);
    })
    app.post('/customer', function(req, res) {
      customers.add(req, res);
    })
    app.post('/delete', function(req, res) {
      customers.delete(req, res);
    })
    app.get('/orders', function(req, res) {
      orders.index(req, res);
    })
    app.post('/order', function(req, res) {
      // orders.add(req, res);
      products.remove(req, res);
    })
    app.get('/products', function(req, res) {
      products.index(req, res);
    })
  };