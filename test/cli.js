/*eslint no-console:0*/
import test from "ava";
import {run} from "../lib/cli";
import {mock} from "sinon";

test.beforeEach(t => {
  t.context.console = mock(console);
  t.context.process = mock(process);
});

test("run with valid json", t => {
  const input = JSON.stringify({ key: "value" });

  const {console} = t.context;
  const expected = JSON.stringify({
    type: "object",
    properties: { key: { type: "string"} }
  });
  const consoleLog = console.expects("log").withArgs(expected) .once();

  run(input);

  t.ok(consoleLog.verify());
});

test("run with invalid input", t => {
  const input = "INVALID INPUT";

  const {console, process} = t.context;
  const message = "Input must be JSON format.";
  const consoleError = console.expects("error").withArgs(message).once();
  const exit = process.expects("exit").withArgs(1).once();

  run(input);

  t.ok(consoleError.verify());
  t.ok(exit.verify());
});

test.afterEach(t => {
  t.context.console.restore();
  t.context.process.restore();
});
