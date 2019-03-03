

const express = require('express');
const app = express();
// const logger = require('./logger')
const logger = require('morgan');
var bodyParser = require('body-parser')

app.use(logger('dev'));
app.use(express.static(__dirname + "/public"))
app.get('/todos', (req, res) => {
    res.send(['item1', 'item-2'])
})
app.listen(3000, () => {
    console.log("http://localhost:3000");
})