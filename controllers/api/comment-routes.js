const router = require('express').Router();
const { Comment, User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

// get all comments api/comment
router.get('/', async (req, res) => {
    try {
        const dbCommentData = await Comment.findAll({});
        if (dbCommentData.length === 0) {
            res.status(404).json({ message: 'Please be sure to add content to your comment.'});
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