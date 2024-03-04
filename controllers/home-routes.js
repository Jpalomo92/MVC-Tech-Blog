const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const sequelize = require('../config/config');

//not sure if I should pull in withAuth constant??
// Get all posts ('/')
router.get('/', async (req, res) => {
    try {
          // Retrieve all posts from db
        const dbPostData = await Post.findAll({ 
            attributes: ['id', 'title', 'content', 'created_at'],           
            include: