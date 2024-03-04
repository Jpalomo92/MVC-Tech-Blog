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
            order: [['created_at', 'DESC']],
        })
        // Serialize data retrieved
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        console.log(posts)
         // Respond with template to render along with date retrieved
         res.render('homepage', 
         { posts, 
         loggedIn: req.session.loggedIn, 
         username: req.session.username,
         userId: req.session.userId });
 } catch (err) {
     res.status(500).json(err);
 }
});

// Get single post ('/post/:id')
router.get('/post/:id', async (req, res) => {
 try{
     const dbPostData = await Post.findOne({
         where: {id: req.params.id},
         attributes: ['id', 'content', 'title', 'created_at'],
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
      });
      if (dbPostData) {
          const post = dbPostData.get({ plain: true });
          console.log(post);
          res.render('single-post', { post, loggedIn: req.session.loggedIn, username: req.session.username, })  
    
module.exports = router; 