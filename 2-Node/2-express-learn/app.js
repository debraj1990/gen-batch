

const express = require('express');
const app = express();
// const logger = require('./logger')
const logger = require('morgan');

app.use(logger('dev'));

app.use(express.static(__dirname + "/public"))

app.get('/todos', (req, res) => {
    let todos = ['wash cloths', 'go movie']
    res.json(todos)
})

app.listen(3000, () => {
    console.log("http://localhost:3000");
})