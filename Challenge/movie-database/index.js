import express from 'express';
import db from './db/db';
import movies from './db/db';

// Set up the express app
const app = express();

// get Ok message
app.get('/test', (req, res) => {
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