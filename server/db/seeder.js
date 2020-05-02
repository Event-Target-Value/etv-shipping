const path = require('path');

const save = require(path.join(__dirname, 'productsdb.js')).save;
const findAllProducts = require(path.join(__dirname, 'productsdb.js')).findAllProducts;
const dummy = require(path.join(__dirname, 'dummydata.js'));


save(dummy.dummyData, (err, data) => {
  if (err) {
    console.log('SAVING ERROR' + err);
  } else {
    console.log('SEEDED TO DATABASE');
  }
});
