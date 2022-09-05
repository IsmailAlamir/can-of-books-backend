'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;
const seedData=require('./book');
const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/book', {useNewUrlParser: true, useUnifiedTopology: true}); // 1 - connect mongoose with DB
mongoose.connect('mongodb://ismail:0000@ac-2600mbx-shard-00-00.xstob48.mongodb.net:27017,ac-2600mbx-shard-00-01.xstob48.mongodb.net:27017,ac-2600mbx-shard-00-02.xstob48.mongodb.net:27017/?ssl=true&replicaSet=atlas-jpvpsa-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}); // 1 - connect mongoose with DB




const BookSchema = new mongoose.Schema({
  title: String,
  description : String,
  status : String
});
const Book = mongoose.model('Book', BookSchema);


function booksHandler (request, response){
  Book.find({},(err,result)=>{
      if(undefined)
      {
          console.log(err);
      }
      else
      {
          console.log(result);
          response.send(result);
      }
  })
 }


async function addBooksHandler(request,response) {
  console.log(request.body);

  const {title,description,status} = request.body; //Destructuring assignment
  await Book.create({
      title : title,
      description : description,
      status : status
  });
  Book.find({},(err,result)=>{
      if(err)
      {
          console.log(err);
      }
      else
      {
          console.log(result);
          response.send(result);
      }
  })
}


function deleteBookHandler(req,res) {
  const bookId = req.params.id;
  Book.deleteOne({_id:bookId},(err,result)=>{
      
    Book.find({},(err,result)=>{
          if(err)
          {
              console.log(err);
          }
          else
          {
              res.send(result);
          }
      })

  })
  
}





// seedData();

app.get('/', (request, response) => {

  response.send('Home')

})

// http://localhost:3000/books
app.get('/books',booksHandler)

app.post('/books',addBooksHandler)


//delete 
app.delete('/deleteBook/:id',deleteBookHandler);


app.get('/test', (request, response) => {

  response.send('test request received')

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
