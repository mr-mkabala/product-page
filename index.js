//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/:path', (req, res) => {
  let path = req.params.path;
  res.render(path);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Ready. Set. Go.');
});
