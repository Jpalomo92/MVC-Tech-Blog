const router = require('express').Router();
const { Comment, User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

// get all comments api/comment
router.get('/', async (req, res) => {
    try {
        const dbCommentData = await Comment.findAll({});
        if (dbCommentData.length === 0) {
            res.status(404).json({ message: 'You have no comments yet :/'});
            return;
        };
        res.status(200).json(dbCommentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create a route to get comment for only one post
router.get('/:id', async (req, res) => {
    try {
        const CommentData = await Comment.findAll({
            where: { id: req.params.id },
        });
        if (CommentData.length === 0) {
            res.status(404).json({ message: `The id ${req.params.id} has no comments.`});
            return;
        };
        res.status(200).json(CommentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// post a comment /api/comment
router.post('/', withAuth, async (req, res) => {
    const body = req.body;
    try {
        const newComment = await Comment.create({
            ...body,
            userId: req.session.userId,
        });
        res.status(200).json({ newComment, success: true });
    } catch (err) {
        res.status(500).json(err);
    }
});

//need to add a delete comment route

// delete comment by id ('api/comment/:id')
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const dbCommentData = await Comment.destroy({
          where: {id: req.params.id},
        });        
        if (!dbCommentData) {
          res.status(404).json({
            message: `No comment is found with id = ${req.params.id}`,
          });
          return;
        }  
        res.status(200).json({dbCommentData, success: true});
      } catch (err) {
        res.status(500).json(err);
      }
});

module.exports = router;