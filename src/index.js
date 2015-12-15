"use strict";

/**
 * Generates JSON Schema from JSON
 *
 * @param {Object|Array} json - JSON
 * @returns {Object} JSON Schema
 */
function schemize(json) {
  if (Array.isArray(json)) {
    return {
      type: "array",
      items: json.map(value => schemize(value))
    };
  } else if (typeof(json) === "object" && json !== null) {
    return {
      type: "object",
      properties:
        Object.keys(json).reduce((props, key) => {
          props[key] = schemize(json[key]);
          return props;
        }, {})
    };
  }

  return { type: detectType(json) };
}

function detectType(value) {
  let type = typeof(value);
  switch(type) {
    case "string":
    case "boolean":
      return type;

    case "number":
      if (value.toString().indexOf('.') === -1) {
        type = "integer";
      }
      return type;
  }

  if (value === null) {
    return "null";
  }

  return "object";
}

export default schemize;
