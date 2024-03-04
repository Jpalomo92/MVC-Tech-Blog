const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/config');


// Get all user's all posts onto their dashboard 
router.get('/', withAuth, (req, res) => {
    Post.findAll({
      where: {
        userId: req.session.userId,
      },
      attributes: ['id', 'title', 'content', 'created_at'],
      order: [['created_at', 'DESC']],