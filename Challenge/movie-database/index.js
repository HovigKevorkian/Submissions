import express from 'express';
import db from './db/db';

// Set up the express app
const app = express();

// get all movies
app.get('/api/v1/movies', (req, res) => {
  res.status(200).send('ok')
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});