'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/book', {useNewUrlParser: true, useUnifiedTopology: true}); // 1 - connect mongoose with DB
let seedData=require('./book');
let bookHandler=require('./book');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;



// seedData();

app.get('/', (request, response) => {

  response.send('Home')

})

// http://localhost:3000/books
app.get('/books',bookHandler)




app.get('/test', (request, response) => {

  response.send('test request received')

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
