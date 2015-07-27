var $ = require('jquery');
var Backbone = require('backbone');
var listProductsTemplate = require('../templates/list-products.hbs');
var Handlebars = require('hbsfy/runtime');


// App
var App = require('../app');

// View: List Users
var ListProducts = Backbone.View.extend({
  el: $('main'),

  collection: App.Collections.product,

  render: function () {
    var _this = this;
    var productCollection = this.collection;
    console.log("pc: " + productCollection);

    Handlebars.registerHelper('if_even', function(conditional, options) {
      if((conditional % 2) == 0) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
      });
    // Fetch Collection from Server
    productCollection.fetch().done(function (products) {
      _this.$el.html(listProductsTemplate(products));
    });
  }
});

module.exports = ListProducts;