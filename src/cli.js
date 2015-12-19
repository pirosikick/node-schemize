/*eslint no-console:0*/
import {readFile} from "fs";
import options from "./options";
import schemize from "./index";

const error = message => {
  console.error(message);
  process.exit(1);
};

/**
 * @param {String} input - JSON string
 * @param {Boolean|String} space - 3rd argument of JSON.stringify
 */
export function run(input, space) {
  let schema;
  try {
    schema = schemize(JSON.parse(input));
  } catch (e) {
    return error("Input must be JSON format.");
  }

  console.log(JSON.stringify(schema, undefined, space));
}

export function init() {
  options.parse(process.argv);

  const space = options.pretty === true ? 2 : options.pretty;

  if (options.input) {
    // from file
    readFile(options.input, (err, input) => {
      if (err) {
        error(`no such file, '${options.input}'`);
        return;
      }
      run(input, space);
    });
  } else {
    // from stdin
    let input = "";
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on("data", chunk => input += chunk);
    process.stdin.on("end", () => run(input, space));
  }
}
