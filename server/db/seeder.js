const path = require('path');
const save = require(path.join(__dirname, 'productsdb.js')).save;
const dummy = require(path.join(__dirname, 'dummyData.js'));



save(dummy.dummyData, (err, data) => {
  if (err) {
    console.log('SAVING ERROR' + err);
  } else {
    console.log('SAVED TO DATABASE');
  }
});
