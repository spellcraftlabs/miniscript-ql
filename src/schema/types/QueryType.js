const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} = require('graphql');
const miniscript = require('miniscript-js');

const GenericScriptType = require('./GenericScriptType');
const PublicKeyEnumType = require('./PublicKeyEnumType');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    policy: {
      type: GenericScriptType,
      args: {
        script: { type: new GraphQLNonNull(GraphQLString) },
        pkType: { type: new GraphQLNonNull(PublicKeyEnumType) },
      },
      resolve: (_, args) => {
        return miniscript.parsePolicy(args.script, args.pkType);
      },
    },
    miniscript: {
      type: GenericScriptType,
      args: {
        script: { type: new GraphQLNonNull(GraphQLString) },
        pkType: { type: new GraphQLNonNull(PublicKeyEnumType) },
      },
      resolve: (_, args) => {
        return miniscript.parseMiniscript(args.script, args.pkType);
      },
    },
  }),
});

module.exports = QueryType;
