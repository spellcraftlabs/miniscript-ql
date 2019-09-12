const { graphql } = require('graphql');
const schema = require('./schema/schema');

module.exports = {
  schema,
  miniscriptQL: (c) => {
    return graphql(
      schema,
      c.query,
      c.rootValue,
      {}, // context
      c.variables,
      c.operationName
    );
  },
};
