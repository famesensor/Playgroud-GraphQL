const { GraphQLString, GraphQLObjectType, GraphQLNonNull } = require('graphql');
const User = require('../../model/user');
const UserType = require('./userType');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const PostType = new GraphQLObjectType({
    name: 'PostType',
    description: 'This is post',
    fields: () => ({
        _id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: GraphQLString },
        content: { type: GraphQLString },
        author_id: { type: new GraphQLNonNull(GraphQLString) },
        author: {
            typr: UserType,
            resolve: async (post) => {
                const author = await User.findById(ObjectId(post.author_id));
                if (!author) throw new Error(`User not found`);
                return author;
            }
        }
    })
});

module.exports = PostType;
