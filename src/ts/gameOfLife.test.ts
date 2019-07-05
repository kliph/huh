import { build } from "./build";
import { instantiate } from "./util";

const GLOBAL: Record<any, any> = {};

beforeAll(() => {
  build("gameOfLife");
});

beforeEach(async () => {
  GLOBAL.wasm = await instantiate();
});

test("offsetFromCoordinate works", async () => {
  expect(GLOBAL.wasm.offsetFromCoordinate(0, 0)).toEqual(0);
  expect(GLOBAL.wasm.offsetFromCoordinate(49, 0)).toEqual(49 * 4);
  expect(GLOBAL.wasm.offsetFromCoordinate(10, 2)).toEqual((10 + 2 * 50) * 4);
});
