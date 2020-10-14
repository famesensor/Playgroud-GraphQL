const { addUser, updateUser, deleteUser } = require('./userMutation');
const { createPost, editPost, deletePost } = require('./postMutation');

module.exports = {
    addUser,
    updateUser,
    deleteUser,
    createPost,
    editPost,
    deletePost
};
