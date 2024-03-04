// importing the models
const User = require('./User');
const Comment = require('./comment');
const Post = require('./Post');

//user has many posts
User.hasMany(Post, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

// user has many comments
User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

// a comment belongs to a user
Comment.belongsTo(User, {
    foreignKey: 'userId',
});

//a comment belongs to a post
Comment.belongsTo(Post, {
    foreignKey: 'postId',
});

// a post belongs to a user
Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

//a post can have many comments
Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

module.exports = { User, Comment, Post };