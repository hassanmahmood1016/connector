const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const post = require('./routes/api/post');

const app = express();

// db configuration
const db = require('./config/keys.js').mongoURI

// connect to Mongodb
mongoose
  .connect(db)
  .then(()=>{
    console.log('mongoDB connected sucessfully');})
  .catch((err)=>{
    console.log(err);})


app.get('/', (req, res)=>{
  res.send('back to hello world i see')
});

// use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/post', post);


const port = process.env.PORT || 5000;

app.listen(port, ()=>{console.log(`server running on port ${port}`);})
