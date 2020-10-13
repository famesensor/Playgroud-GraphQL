const { GraphQLNonNull, GraphQLString } = require('graphql');
const PostType = require('../queries/postType');
const Post = require('../../model/post');

exports.createPost = {
    type: PostType,
    args: {
        title: {
            name: 'title',
            type: new GraphQLNonNull(GraphQLString)
        },
        author_id: {
            name: 'author_id',
            type: new GraphQLNonNull(GraphQLString)
        },
        category: {
            name: 'category',
            type: new GraphQLNonNull(GraphQLString)
        },
        content: {
            name: 'content',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async (root, params) => {
        const postModel = new Post(params);
        const result = await postModel.save();
        console.log(result);
        if (!result) throw new Error('Create post fail!');
        return result;
    }
};

exports.editPost = {
    type: PostType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        },
        title: {
            name: 'title',
            type: GraphQLString
        },
        content: {
            name: 'content',
            type: GraphQLString
        },
        category: {
            name: 'category',
            type: GraphQLString
        },
        author_id: {
            name: 'author_id',
            type: GraphQLString
        }
    },
    resolve: async (root, params) => {
        const data = {
            ...params.title,
            ...params.content,
            ...params.category,
            ...params.author_id
        };
        const post = await Post.findByIdAndUpdate(params._id, data, {
            new: true,
            runValidators: true
        });
        console.log(post);
        if (!post) throw new Error('Update post fail!');
        return post;
    }
};

exports.deletePost = {
    type: PostType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async (root, parmas) => {
        const result = await Post.findByIdAndDelete(parmas._id);
        if (!result) throw new Error('Delete post fail!');
        return {
            success: true,
            data: 'Delete post success!'
        };
    }
};
