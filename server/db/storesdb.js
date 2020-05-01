const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/target', { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', () => {
  console.log(
    'CONNECTED TO MONGO DATABASE',
  );
});


// /products/:id
const productSchema = mongoose.Schema({
  productId: Number,
  recommended: Array,
  price: Number,
  zip: Array,
  image: String,
});


const Products = mongoose.model('Products', productSchema);


const findAllProducts = (callback) => {
  Products.find({}).exec((err, allProducts) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, allProducts);
    }
  });
};

const findProduct = (search, callback) => {
  Products.find(search).exec((err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};


module.exports.findAllProducts = findAllProducts;
module.exports.findProduct = findProduct;
module.exports.save = save;