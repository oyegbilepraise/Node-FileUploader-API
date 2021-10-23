const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const user = require('./users')
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/', user)

app.listen(4200, ()=> {
    console.log('Server connected to port 4200');
})