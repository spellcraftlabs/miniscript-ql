# Miniscript QL

## Install
```bash
$ npm install --save miniscript-ql
```

## Usage
```js
const { miniscriptQL as ql } = require('miniscript-ql');

const query = `
  query($script: String!) {
    policy(script: $script, pkType: PUBLIC_KEY) {
      miniscript {
        script
        semantic {
          minimumNKeys
        }
      }
      script {
        script
      }
    }
  }
`;

const variables = {
  script: 'and(pk(022222222222222222222222222222222222222222222222222222222222222222),pk(022222222222222222222222222222222222222222222222222222222222222222))',
};

ql({ query, variables }).then((res) => {
  console.log(JSON.stringify(res, null, 2));
});
```
