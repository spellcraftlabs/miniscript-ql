const { GraphQLEnumType } = require('graphql');

const PublicKeyEnumType = new GraphQLEnumType({
  name: 'PublicKeyEnum',
  values: {
    STRING: { value: 'STRING' },
    PUBLIC_KEY: { value: 'PUBLIC_KEY' },
    DUMMY_KEY: { value: 'DUMMY_KEY' },
  },
});

module.exports = PublicKeyEnumType;
