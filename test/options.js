import test from "ava";
import options from "../lib/options";

test("--pretty ", t => {
  const argv = ["node", "schemize", "--pretty"];
  options.parse(argv);
  t.is(options.pretty, true);
});

test("--pretty 2", t => {
  const argv = ["node", "schemize", "--pretty", "2"];
  options.parse(argv);
  t.is(options.pretty, 2);
});

test("--pretty tab", t => {
  const argv = ["node", "schemize", "--pretty", "tab"];
  options.parse(argv);
  t.is(options.pretty, "\t");
});
