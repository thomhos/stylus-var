# Stylus var
A function to add an array of vars from js to stylus. Useful for when you have some vars in JS that need to be added to stylus.

## Install
```
npm i -D stylus-var
```

## Usage
```
var ArrayWithStyles = [
  {
    name: 'someColor',
    value: '#ffffff'
  }
];

var styleVars = require('stylus-var');

stylus.use(styleVars(ArrayWithStyles));
```

Example with webpack. (requires more dependencies)
```
var ArrayWithStyles = [
  {
    name: 'someColor',
    value: '#ffffff'
  }
];

var styleVars = require('stylus-var');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract('css-loader!stylus-loader')
            },
        ]
    },

    stylus: {
      use: [styleVars(ArrayWithStyles)]
    }
}

```
