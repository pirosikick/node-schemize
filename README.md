[![npm version](https://badge.fury.io/js/schemize.svg)](http://badge.fury.io/js/schemize)
[![david](https://david-dm.org/pirosikick/schemize.svg)](https://david-dm.org/pirosikick/schemize)
[![Build Status](https://travis-ci.org/pirosikick/schemize.svg)](https://travis-ci.org/pirosikick/schemize)

node-schemize
=============

Generates JSON Schema from JSON.

## How to use

```sh
# Install schemize in global
$ npm install -g schemize

$ cat sample.json
{
  "key": "value"
}

# Generates JSON Schema from JSON
$ schemize sample.json
{"type":"object","properties":[{"type":"string"}]}
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
