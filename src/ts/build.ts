import { readFileSync, writeFileSync } from "fs";
const wabt = require("wabt")();
import { wasmPath } from "./util";

export const build = (filename: string) => {
  const watPath = "src/wat/";
  const inputWat = watPath + `${filename}.wat`;

  const outputWasm = wasmPath(filename);

  const wasmModule = wabt.parseWat(inputWat, readFileSync(inputWat, "utf8"));
  const { buffer } = wasmModule.toBinary({ log: true });

  writeFileSync(outputWasm, new Buffer(buffer));
};
