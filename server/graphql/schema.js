const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const mutation = require('./mutations/index');
const QueryRootType = require('./queries/index');

const BlogAppSchema = new GraphQLSchema({
    query: QueryRootType,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutation
    })
});

module.exports = BlogAppSchema;
