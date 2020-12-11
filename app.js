const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
    res.send("fff");
})

app.listen('8080', () => {
    console.log('Start');
})