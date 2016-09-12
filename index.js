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
    stl.define(item.name, new stylus.nodes.Literal(item.value));
  };

};
