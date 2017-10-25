// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  'extends': 'google',
  // add your custom rules here
  'rules': {
    //Fix for undefined rule switch-colon-spacing
    'switch-colon-spacing': 0,
    'linebreak-style': 0,
    'babel/new-cap': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
