/*eslint no-console:0*/
import {readFile} from "fs";
import options from "commander";
import packageJson from "../package.json";
import schemize from "./index";

options
  .version(packageJson.version)
  .description(packageJson.description)
  .usage("[options]")
  .option("-i, --input <path>", "Input file path");

const error = message => {
  console.error(message);
  process.exit(1);
};

/**
 * @param {String} input - JSON string
 */
export function run(input) {
  let schema;
  try {
    schema = schemize(JSON.parse(input));
  } catch (e) {
    return error("Input must be JSON format.");
  }

  console.log(JSON.stringify(schema));
}

export function init() {
  options.parse(process.argv);

  if (options.input) {
    readFile(options.input, (err, input) => {
      if (err) {
        return error(`no such file, '${options.input}'`);
      }

      run(input);
    });
    return;
  }

  let input = "";
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on("data", chunk => input += chunk);
  process.stdin.on("end", () => run(input));
}
