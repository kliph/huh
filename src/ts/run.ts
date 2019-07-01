import { readFileSync } from "fs";
import { wasmPath } from "./util";

export const run = async (filename: string) => {
  const buffer = readFileSync(wasmPath(filename));
  const wasmModule = await WebAssembly.compile(buffer);
  const instance = await WebAssembly.instantiate(wasmModule);
  console.log(instance.exports.helloWorld());
};
