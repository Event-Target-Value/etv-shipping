const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());
const port = 9000;


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
