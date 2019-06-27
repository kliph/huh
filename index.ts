import { readFileSync, writeFileSync } from "fs";
const wabt = require("wabt")();

const filename = "helloWorld";

const wasmPath = (fn: string): string => {
  const outputPath = "out/wasm/";
  return outputPath + `${fn}.wasm`;
}

const compile = (filename: string) => {
  const watPath = "src/wat/";
  const inputWat = watPath + `${filename}.wat`;

  const outputWasm = wasmPath(filename);

  const wasmModule = wabt.parseWat(inputWat, readFileSync(inputWat, "utf8"));
  const { buffer } = wasmModule.toBinary({ log: true });

  writeFileSync(outputWasm, new Buffer(buffer));
};

compile(filename);
