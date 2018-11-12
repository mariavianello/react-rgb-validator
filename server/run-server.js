const path = require('path');
const express = require('express');
const apiMocker = require('webpack-api-mocker');

const app = express();

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

apiMocker(app, path.resolve('./server/endpoints.js'));
app.listen(8081);
