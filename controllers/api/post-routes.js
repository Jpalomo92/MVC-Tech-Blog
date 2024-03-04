const router = require('express').Router();
const { User, Post, Comment  } = require('../../models');
const withAuth = require('../../utils/auth');

// create a new post ('/api/post')
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({ ...req.body, userId: req.session.userId });
        console.log("This is the new post", newPost);
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// edit post ('/api/post/:id')
router.put('/:id', withAuth, async (req, res) => {
    try {
      const updatedPost = await Post.update(
        {
          title: req.body.title,
          content: req.body.content,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
  