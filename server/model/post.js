const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const postSchema = new Schema({
    author_id: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('post', postSchema);
