const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// this will sign up the user through the user api path (api/user)
router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create(req.body);
        req.session.save(() => {
            req.session.userId = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            res.status(201).json({ message: `Account created for ${dbUserData.username}`});
        });
    } catch (err) {
        res.status(400).json(err);
    }
});