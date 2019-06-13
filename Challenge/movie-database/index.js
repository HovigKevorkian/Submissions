import express from 'express';
import db from './db/db';
import movies from './db/db';

// Set up the express app
const app = express();

/************** Read Movies **************/
/*****************************************/
app.get('/movies/read', (req, res) => {
  res.status(200).send({
    status: 200,
    data: movies
  });
});

/********** Read Movies by Date **********/
/*****************************************/
app.get('/movies/read/by-date', (req, res) => {
  res.status(200).send({
    status: 200,
    data: movies.sort(function(a, b) {
      return b.year - a.year;
    })
  });
});

/********* Read Movies by rating *********/
/*****************************************/
app.get('/movies/read/by-rating', (req, res) => {
  res.status(200).send({
    status: 200,
    data: movies.sort(function(a, b) {
      return b.rating - a.rating;
    })
  });
});

/********* Read Movies by Title *********/
/****************************************/
app.get('/movies/read/by-title', (req, res) => {
  res.status(200).send({
    status: 200,
    data: movies.sort(function(a, b) {
      var TitleA = a.title.toUpperCase();
      var TitleB = b.title.toUpperCase();

      // return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      if (TitleA < TitleB) {
        return -1;
      } else if (TitleA > TitleB) {
        return 1;
      } else {
        return 0;
      }
    })
  });
});

/********** Read Movies by ID **********/
/***************************************/
app.get('/movies/read/id/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id <= movies.length && id > 0) {
    res.status(200).send({
      status: 200,
      data: movies[id - 1]
    });
  } else {
    res.status(404).send({
      status: 404,
      error: 'true',
      message: 'the movie ' + id + ' does not exist'
    });
  }
});

/************** Create Movies **************/
/*******************************************/
app.get('/movies/create', (req, res) => {
  const Title = req.query.title;
  const Year = req.query.year;
  const Rating = req.query.rating;
  if (!Title || !Year || isNaN(Year) || Year.length != 4) {
    res.status(403).send({
      status: 403,
      error: 'true',
      message: 'you cannot create a movie without providing a title and a year'
    });
  } else {
    movies.push({
      title: Title,
      year: parseInt(Year),
      rating: parseInt(Rating >= 0 && Rating <= 10 && Rating != '' ? Rating : 4)
    });
    res.status(200).send({
      status: 200,
      message: 'ok',
      data: movies
    });
  }
});

/************** Delete Movies **************/
/*******************************************/
app.get('/movies/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id <= movies.length && id > 0) {
    movies.splice(id - 1, 1);
    res.status(200).send({
      status: 200,
      data: movies
    });
  } else {
    res.status(404).send({
      status: 404,
      error: 'true',
      message: 'the movie ' + id + ' does not exist'
    });
  }
});

/************** Update Movies **************/
/*******************************************/
app.get('/movies/update/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const Title = req.query.title;
  const Year = req.query.year;
  const Rating = req.query.rating;
  
  function queryCatcher(query, DBvalue) {
    if (query != undefined || query == '') {
      movies[id-1][DBvalue] = query;
    }
  }

  if (id <= movies.length && id > 0) {
    queryCatcher(Title, 'title');
    queryCatcher(Year, 'year');
    queryCatcher(Rating, 'rating');
    res.status(200).send({
      status: 200,
      data: movies[id - 1]
    });
  
  } else {
    res.status(404).send({
      status: 404,
      message: 'the movie ' + id + ' does not exist'
    });
  }
});

// get Time message
app.get('/time', (req, res) => {
  var time = new Date();
  res.status(200).send({
    status: 200,
    message: time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
  });
});

// get Hello + ID message
app.get('/hello/:id', (req, res) => {
  const id = req.params.id;
  res.status(200).send({
    status: 200,
    message: 'Hello, ' + id
  });
});

// get Search + ID message
app.get('/search', (req, res) => {
  const data = req.query.s;
  if (!data) {
    res.status(200).send({
      status: 200,
      error: 'true',
      message: 'you have to provide a search'
    });
  } else {
    res.status(500).send({
      status: 500,
      message: 'ok',
      data: data
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
