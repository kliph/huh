import { build } from "./src/ts/build";
import { instantiate } from "./src/ts/util";

const GLOBAL: Record<any, any> = {};

beforeAll(() => {
  build("helloWorld");
});

beforeEach(async () => {
  GLOBAL.wasm = await instantiate();
});

test("helloWorld works", async () => {
  expect(GLOBAL.wasm.helloWorld()).toEqual(42);
});
