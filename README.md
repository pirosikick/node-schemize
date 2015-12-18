[![npm version](https://badge.fury.io/js/schemize.svg)](http://badge.fury.io/js/schemize)
[![david](https://david-dm.org/pirosikick/node-schemize.svg)](https://david-dm.org/pirosikick/node-schemize)
[![Build Status](https://api.travis-ci.org/pirosikick/node-schemize.svg)](https://travis-ci.org/pirosikick/node-schemize)

node-schemize
=============

Generates JSON Schema from JSON.

## Installation

```sh
$ npm install schemize

# if you want to use CLI, please install as global package.
$ npm install -g schemize
```

## CLI

```sh
# Input from stdin
$ cat some.json | schemize

# Input from file
$ schemize -i some.json
```

## Programmatic API

```javascript
var schemize = require('schemize');

var json = {
  key: "value"
};

console.log(schemize(json));
```

## License

[MIT](http://pirosikick.mit-license.org/)
