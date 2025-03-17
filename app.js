require('dotenv/config');

// ℹ️ Connects to the database
require('./db');

const express = require('express');

// Handles the handlebars
const hbs = require('hbs');

const app = express();

app.use(express.static('public',  { cacheControl: false, etag: false, maxAge: 0 }));

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);

// default value for title local
const projectName = 'lab-express-cinema';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

// 👇 Start handling routes here
const index = require('./routes/index')
app.use('/', index)

//Movie Routes
const movies = require('./routes/movies.routes')
app.use('/movies', movies)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
