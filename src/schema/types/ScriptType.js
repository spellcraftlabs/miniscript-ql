const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLBoolean,
} = require('graphql');

const ScriptType = new GraphQLObjectType({
  name: 'Script',
  fields: () => ({
    script: {
      type: GraphQLString,
      resolve: (rootValue) => {
        return rootValue.script.encode();
      },
    },
    length: {
      type: GraphQLInt,
      resolve: (rootValue) => {
        return rootValue.script.len();
      },
    },
    isEmpty: {
      type: GraphQLBoolean,
      resolve: (rootValue) => {
        return rootValue.script.isEmpty();
      },
    },
    toBytes: {
      type: new GraphQLList(GraphQLInt),
      resolve: (rootValue) => {
        return rootValue.script.toBytes().bytes;
      },
    },
    toP2SH: {
      type: GraphQLBoolean,
      resolve: (rootValue) => {
        return rootValue.script.toP2SH();
      },
    },
    toV0P2WSH: {
      type: GraphQLBoolean,
      resolve: (rootValue) => {
        return rootValue.script.toV0P2WSH();
      },
    },
    isP2SH: {
      type: GraphQLBoolean,
      resolve: (rootValue) => {
        return rootValue.script.isP2SH();
      },
    },
    isP2PKH: {
      type: GraphQLBoolean,
      resolve: (rootValue) => {
        return rootValue.script.isP2PKH();
      },
    },
    isP2PK: {
      type: GraphQLBoolean,
      resolve: (rootValue) => {
        return rootValue.script.isP2PK();
      },
    },
    isWitnessProgram: {
      type: GraphQLBoolean,
      resolve: (rootValue) => {
        return rootValue.script.isWitnessProgram();
      },
    },
    isV0P2WSH: {
      type: GraphQLBoolean,
      resolve: (rootValue) => {
        return rootValue.script.isV0P2WSH();
      },
    },
    isV0P2WPKH: {
      type: GraphQLBoolean,
      resolve: (rootValue) => {
        return rootValue.script.isV0P2WPKH();
      },
    },
    isOPRETURN: {
      type: GraphQLBoolean,
      resolve: (rootValue) => {
        return rootValue.script.isOPRETURN();
      },
    },
    isProvablyUnspendable: {
      type: GraphQLBoolean,
      resolve: (rootValue) => {
        return rootValue.script.isProvablyUnspendable();
      },
    },
  }),
});

module.exports = ScriptType;
