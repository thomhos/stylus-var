var stylus = require('stylus');

module.exports = function(varArr) {
  return function(style) {
    if(varArr.length) {
      varArr.map(function(item, i) {
          return addStyle(style, item)
      });
    };
  }

  function addStyle(stl, item) {
    stl.include(__dirname);
    if(item !== null && typeof item === 'object') {
      stl.define(item.name, item.value, true);
    } else {
      stl.define(item.name, item.value);
    };
  };
};
