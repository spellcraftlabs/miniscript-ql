const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
} = require('graphql');

const MiniscriptType = require('./MiniscriptType');
const ScriptType = require('./ScriptType');

const GenericScriptType = new GraphQLObjectType({
  name: 'GenericScript',
  fields: () => ({
    miniscript: {
      type: MiniscriptType,
      resolve: (rootValue) => {
        return rootValue;
      },
    },
    script: {
      type: ScriptType,
      resolve: (rootValue) => {
        return rootValue;
      },
    },
  }),
});

module.exports = GenericScriptType;
