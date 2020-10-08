const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
//DB config
const dbURI = require('./config/keys').mongoURI;

//connect to mongo
// console.log(db)

mongoose.connect(dbURI, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', function(){
    console.log("couldn't connect to db");
  });
  
  db.once('open', function() {
    console.log("db connected")
  });

  app.use(express.json());


var cors = require("cors");
app.use(cors());

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server started on port ${port}`));

app.get('/', function(req, res){
  console.log('getting all books');
  Book.find({}).exec(function(err, books){
      if(err) {
          res.send('error has occured');
      } else {
          console.log(books);
          res.json(books);
      }
  });
});