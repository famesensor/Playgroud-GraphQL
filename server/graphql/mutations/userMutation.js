const { GraphQLNonNull, GraphQLString } = require('graphql');
const UserType = require('../queries/userType');
const User = require('../../model/user');

exports.addUser = {
    type: UserType,
    args: {
        name: {
            name: 'name',
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            name: 'email',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async (root, params) => {
        const user = await User.create(params);
        console.log(user);
        if (!user) throw new Error('Create user fail!');
        return user;
    }
};

exports.updateUser = {
    type: UserType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            name: 'name',
            type: GraphQLString
        },
        email: {
            name: 'email',
            type: GraphQLString
        }
    },
    resolve: async (root, params) => {
        const data = {
            ...params.name,
            ...params.email
        };
        const user = await User.findByIdAndUpdate(params._id, data, {
            new: true,
            runValidators: true
        });
        console.log(user);
        if (!user) throw new Error('Update user fail!');
        return user;
    }
};

exports.deleteUser = {
    type: UserType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async (root, parmas) => {
        const result = await User.findByIdAndDelete(parmas._id);
        if (!result) throw new Error('Delete user fail!');
        return {
            success: true,
            data: 'Delete user success!'
        };
    }
};
