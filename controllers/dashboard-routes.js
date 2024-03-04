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
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment', 'postId', 'userId', 'created_at'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    })
    .then((dbPostData) => {
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true, username: req.session.username,});
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//get a post to edit it
router.get('/edit/:id', withAuth, (req, res) => { 

    
})
module.exports = router; 