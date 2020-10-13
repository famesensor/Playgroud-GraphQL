const { GraphQLList, GraphQLObjectType } = require('graphql');
const User = require('../../model/user');
const Post = require('../../model/post');
const UserType = require('./userType');
const PostType = require('./postType');

const QueryRootType = new GraphQLObjectType({
    name: 'WebAppSchema',
    description: 'Web Application query root',
    fields: () => ({
        authors: {
            type: GraphQLList(UserType),
            description: 'List of all Authors',
            resolve: async () => {
                console.log('find user!');
                return await User.find().exec();
            }
        },
        posts: {
            type: GraphQLList(PostType),
            description: 'List of all Posts',
            resolve: async () => {
                console.log('find posts!');
                return await Post.find().exec();
            }
        }
    })
});
