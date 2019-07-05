import { readFileSync } from "fs";

export const instantiate = async () => {
  const buffer = readFileSync("./out/wasm/helloWorld.wasm");
  const wasmModule = await WebAssembly.compile(buffer);
  const instance = await WebAssembly.instantiate(wasmModule);
  return instance.exports;
};

export const wasmPath = (fn: string): string => {
  const outputPath = "out/wasm/";
  return outputPath + `${fn}.wasm`;
};
