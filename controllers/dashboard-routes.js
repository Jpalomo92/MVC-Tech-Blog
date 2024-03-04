const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/config');

router.get('/', withAuth, (req, res) => {
    Post.findAll({
      where: {
        userId: req.session.userId,
      },