const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLList,
} = require('graphql');

const SemanticType = new GraphQLObjectType({
  name: 'Semantic',
  fields: () => ({
    normalized: {
      type: GraphQLString,
      resolve: (rootValue) => {
        return rootValue.semantic.normalized();
      },
    },
    isTrivial: {
      type: GraphQLBoolean,
      resolve: (rootValue) => {
        return rootValue.semantic.isTrivial();
      },
    },
    isUnsatisfiable: {
      type: GraphQLBoolean,
      resolve: (rootValue) => {
        return rootValue.semantic.isUnsatisfiable();
      },
    },
    relativeTimelocks: {
      type: new GraphQLList(GraphQLInt),
      resolve: (rootValue) => {
        return rootValue.semantic.relativeTimelocks().timelocks;
      },
    },
    atAge: {
      type: GraphQLString,
      resolve: (rootValue) => {
        return rootValue.semantic.atAge();
      },
    },
    nKeys: {
      type: GraphQLInt,
      resolve: (rootValue) => {
        return rootValue.semantic.nKeys();
      },
    },
    minimumNKeys: {
      type: GraphQLInt,
      resolve: (rootValue) => {
        return rootValue.semantic.minimumNKeys();
      },
    },
    sorted: {
      type: GraphQLString,
      resolve: (rootValue) => {
        return rootValue.semantic.sorted();
      },
    },
  }),
});

module.exports = SemanticType;
