module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-env'],
  env: {
    test: {
      plugins:['@babel/plugin-transform-runtime']
    }
  }
};