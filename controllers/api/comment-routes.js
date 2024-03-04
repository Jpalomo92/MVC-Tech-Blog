const router = require('express').Router();
const { Comment, User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

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
})