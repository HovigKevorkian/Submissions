import express from 'express';
import db from './db/db';
import movies from './db/db';

// Set up the express app
const app = express();

// Create New Movies
app.get('/movies/create', (req, res) => {
  res.status(200).send({
    status: 200,
    message: 'ok'
  })
});

/************** Read Movies **************/
/*****************************************/
app.get('/movies/read', (req, res) => {
  res.status(200).send({
    status: 200,
    data: movies
  })
});

/********** Read Movies by Date **********/
/*****************************************/
app.get('/movies/read/by-date', (req, res) => {
  res.status(200).send({
    status: 200,
    data: movies.sort(function(a,b) {
      return (b.year) - (a.year); })
  })
});

/********* Read Movies by rating *********/
/*****************************************/
app.get('/movies/read/by-rating', (req, res) => {
  res.status(200).send({
    status: 200,
    data: movies.sort(function(a,b) {
      return (b.rating) - (a.rating); })
  })
});

/********* Read Movies by Title *********/
/****************************************/
app.get('/movies/read/by-title', (req, res) => {
  res.status(200).send({
    status: 200,
    data: movies.sort(function(a,b) {
      var TitleA = a.title.toUpperCase();
      var TitleB = b.title.toUpperCase();
    
    // return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    if(TitleA < TitleB) {
      return -1
    } else if(TitleA > TitleB) {
      return 1
    } else {
      return 0 }
  })
  })
});

// Update Movies
app.get('/movies/update', (req, res) => {
  res.status(200).send({
    status: 200,
    message: 'ok'
  })
});

// Delete Movies
app.get('/movies/delete', (req, res) => {
  res.status(200).send({
    status: 200,
    message: 'ok'
  })
});

// get Time message
app.get('/time', (req, res) => {
  var time = new Date();
  res.status(200).send({
    status: 200,
    message: time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
  })
});

// get Hello + ID message
app.get('/hello/:id', (req, res) => {
  const id = req.params.id;
  res.status(200).send({
    status: 200,
    message: 'Hello, ' + id,
  })
});

// get Search + ID message
app.get('/search', (req, res) => {
  const data = req.query.s;
  if(!data) {
    res.status(200).send({
      status: 200,
      error: 'true',
      message:'you have to provide a search'
    })
  } else {
    res.status(500).send({
      status: 500,
      message: 'ok',
      data: data
    })
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});