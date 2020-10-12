const { GraphQLString, GraphQLObjectType, GraphQLNonNull } = require('graphql');

const UserType = new GraphQLObjectType({
    name: 'UserType',
    description: 'This is user',
    fields: () => ({
        _id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLString }
    })
});

module.exports = UserType;
