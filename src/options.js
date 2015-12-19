import options from "commander";
import packageJson from "../package.json";

const space = value => {
  if (value === 'tab') {
    return '\t';
  } else if (parseInt(value)) {
    return parseInt(value);
  }

  return 2;
};

options
  .version(packageJson.version)
  .description(packageJson.description)
  .usage("[options]")
  .option("-i, --input <path>", "Input file path")
  .option("--pretty [integer|\"tab\"]", "Prettify output JSON", space);

export default options;
