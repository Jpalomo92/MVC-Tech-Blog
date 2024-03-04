const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const sequelize = require('../config/config');

//not sure if I should pull in withAuth constant??
