import express from 'express';
import db from './db/db';

// Set up the express app
const app = express();

// get Ok message
app.get('/test', (req, res) => {
  res.status(200).send({
    status: 200,
    message: 'ok'
  })
});

// get Ok message
app.get('/time', (req, res) => {
  var date = new Date();
  res.status(200).send({
    status: 200,
    message: date.getHours()+':'+date.getMinutes()
  })
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});