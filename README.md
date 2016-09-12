# Stylus var
A function to add an array of vars from js to stylus. Useful for when you have some vars in JS that need to be added to stylus.

## Install
```
npm i -D stylus-var
```


## Usage

Your objects in the array should be structured like;
```
{
  name: 'ColorPrimary',
  value: '#ffffff'
}
```
inside stylus
```
background-color: ColorPrimary
```

If the value is an object, you can access it's properties inside stylus by doing this;
```
{
  name: 'FontSize',
  value: {
    base: '10px',
    body: '1.6rem'
  }
}
```

inside stylus
```
font-size: FontSize.body
```
(keep in mind to use the colon when defining an objects)



Example
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
