[![npm version](https://badge.fury.io/js/schemize.svg)](http://badge.fury.io/js/schemize)
[![david](https://david-dm.org/pirosikick/schemize.svg)](https://david-dm.org/pirosikick/schemize)
[![Build Status](https://travis-ci.org/pirosikick/schemize.svg)](https://travis-ci.org/pirosikick/schemize)

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
$ cat some.json | schemize

$ cat some.json | schemize --yaml

$ schemize -i some.json -o schema.json
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
