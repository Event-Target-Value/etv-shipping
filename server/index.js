const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');
const findProduct = require(path.join(__dirname, 'db', 'productsdb.js')).findProduct;


const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
const port = 9000;

app.get('/findProduct/:id', (req, res) => {
  findProduct(req.params.id, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
