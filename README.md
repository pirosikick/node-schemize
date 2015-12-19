[![npm version](https://badge.fury.io/js/schemize.svg)](http://badge.fury.io/js/schemize)
[![david](https://david-dm.org/pirosikick/node-schemize.svg)](https://david-dm.org/pirosikick/node-schemize)
[![Build Status](https://api.travis-ci.org/pirosikick/node-schemize.svg)](https://travis-ci.org/pirosikick/node-schemize)

node-schemize
=============

Generates JSON Schema from JSON.
This package was inspired by [this gem package](https://github.com/kenchan/schemize).

## Installation

```sh
$ npm install schemize

# if you want to use CLI, please install as global package.
$ npm install -g schemize
```

## CLI

```sh
$ schemize --help

  Usage: schemize [options]

  Generates JSON schema from JSON

  Options:

    -h, --help                output usage information
    -V, --version             output the version number
    -i, --input <path>        Input file path
    --pretty [integer|"tab"]  Prettify output JSON
```

Example:

```sh
$ echo '{ "key": "value" }' > example.json

# Input from stdin
$ cat example.json | schemize
{"type":"object","properties":{"key":{"type":"string"}}}

# Input from file
$ schemize -i example.json
{"type":"object","properties":{"key":{"type":"string"}}}

# Prettify output JSON format
$ schemize -i example.json --pretty
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string"
    }
  }
}
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
