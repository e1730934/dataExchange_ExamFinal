const basicInfo = require('./basicInfo');
const servers = require('./servers');
const tags = require('./tags');
const components = require('./components');
const indexAll = require('./indexAll');

module.exports = {
  ...basicInfo,
  ...servers,
  ...tags,
  ...components,
  ...indexAll,
};
