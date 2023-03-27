/**
 * Products.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {type:'string', required:true},
    description: {type:'string', required:true},
    code: {type:'string', required:true},
    price: {type:'number', required:true},
    stock: {type:'number', required:true},
    sales: {type:'string', required:false, defaultsTo:'0'},
    thumbnail: {type:'string', required:true},
  },

};

