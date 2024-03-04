// Import path module
const path = require('path');
// Import Express.js
const express = require('express');

const session = require('express-session');
const exphbs = require('express-handlebars');
// Import the custom helper methods
const helpers = require('./utils/helpers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Import routes
const routes = require('./controllers');
// Import sequelize connection
const sequelize = require('./config/connection');


