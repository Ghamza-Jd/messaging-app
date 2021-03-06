module.export = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    node: true,
    mocha: true,
  },
  rules: {
    'func-names': ['error', 'as-needed'],
  },
};
