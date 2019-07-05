export const wasmPath = (fn: string): string => {
  const outputPath = "out/wasm/";
  return outputPath + `${fn}.wasm`;
};
