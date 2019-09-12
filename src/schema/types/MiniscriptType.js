const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql');

const SemanticType = require('./SemanticType');

const MiniscriptType = new GraphQLObjectType({
  name: 'Miniscript',
  fields: () => ({
    script: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (rootValue) => {
        return rootValue.miniscript.encode();
      },
    },
    size: {
      type: GraphQLInt,
      resolve: (rootValue) => {
        return rootValue.miniscript.scriptSize();
      },
    },
    maxSatisfactionWitnessElements: {
      type: GraphQLInt,
      resolve: (rootValue) => {
        return rootValue.miniscript.maxSatisfactionWitnessElements();
      },
    },
    maxSatisfactionSize: {
      type: GraphQLInt,
      resolve: (rootValue) => {
        return rootValue.miniscript.maxSatisfactionSize();
      },
    },
    semantic: {
      type: SemanticType,
      resolve: (rootValue) => {
        return rootValue;
      },
    },
  }),
});

module.exports = MiniscriptType;
