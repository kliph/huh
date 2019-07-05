import { readFileSync } from "fs";
import { build } from "./src/ts/build";

const GLOBAL: Record<any, any> = {};

const instantiate = async () => {
  const buffer = readFileSync("./out/wasm/helloWorld.wasm");
  const wasmModule = await WebAssembly.compile(buffer);
  const instance = await WebAssembly.instantiate(wasmModule);
  return instance.exports;
};

beforeAll(() => {
  build("helloWorld");
});

beforeEach(async () => {
  GLOBAL.wasm = await instantiate();
});

test("helloWorld works", async () => {
  expect(GLOBAL.wasm.helloWorld()).toEqual(42);
});
