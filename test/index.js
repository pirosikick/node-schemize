"use strict";
import assert from "power-assert";
import schemize from "../lib";

describe("schemize", function () {
  it("array", function () {
    let json = [
      "string",
      1,
      1.1,
      null,
      []
    ];

    let expected = {
      type: "array",
      items: [
        { type: "string" },
        { type: "integer" },
        { type: "number" },
        { type: "null" },
        { type: "array", items: [] },
      ]
    };
    assert.deepEqual(schemize(json), expected);
  });

  it("object", function () {
    let json = {
      array: [1],
      int: 1,
      num: 1.1,
      nul: null,
      str: "string",
      bool: true
    };

    let expected = {
      type: "object",
      properties: {
        array: {
          type: "array",
          items: [{ type: "integer" }]
        },
        int: { type: "integer" },
        num: { type: "number" },
        nul: { type: "null" },
        str: { type: "string" },
        bool: { type: "boolean" }
      }
    };
    assert.deepEqual(schemize(json), expected);
  });
});
