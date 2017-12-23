const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

var app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page'
    , welcomeMessage: 'Welcome to my website'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.get('/bad', (req, res)=> {
  res.send({
    errorMassag: 'Unable to handle request'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
});
