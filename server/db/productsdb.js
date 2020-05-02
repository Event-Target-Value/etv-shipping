const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/target', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// /products/:id
const productSchema = mongoose.Schema({
  productId: Number,
  recommended: [{ name: String, price: Number, recImage: String }],
  price: Number,
  zip: Array,
  image: String,
});


const Product = mongoose.model('Products', productSchema);

const save = (productData, callback) => {
  const productDocs = [];

  productData.forEach((asource) => {
    let oneProduct = new Product();
    let newDoc = Object.assign(oneProduct, asource);
    productDocs.push(newDoc);
  });

  Product.insertMany(productDocs, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  });
};

const findAllProducts = (callback) => {
  Product.find({}).exec((err, allProducts) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, allProducts);
    }
  });
};

const findProduct = (search, callback) => {
  Product.find(search).exec((err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const drop = () => {
  Product.collection.drop();
};

module.exports.findAllProducts = findAllProducts;
module.exports.findProduct = findProduct;
module.exports.save = save;
module.exports.drop = drop;
