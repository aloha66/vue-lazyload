import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import pkg from "../package.json";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import fs from "fs";
import dts from "rollup-plugin-dts";
import { Plugin } from "rollup";

// const VUE_DEMI_IIFE = fs.readFileSync(
//   require.resolve("vue-demi/lib/index.iife.js"),
//   "utf-8"
// );

// const injectVueDemi: Plugin = {
//   name: "inject-vue-demi",
//   renderChunk(code) {
//     return `${VUE_DEMI_IIFE};\n;${code}`;
//   },
// };

const name = pkg.name;

const iifeGlobals = {
  "vue-demi": "VueDemi",
  vue: "Vue",
};

const configs = [
  {
    input: `src/index.ts`,
    output: [
      {
        file: `/dist/index.cjs.js`,
        format: "cjs",
      },
      {
        file: `dist/index.esm.js`,
        format: "es",
      },
    ],
    plugins: [
      commonjs(),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
        },
      }),
      babel({ runtimeHelpers: true }),
      terser(),
    ],
    external: ["vue-demi", "vue"],
  },
  //   {
  //     input: `../src/index.ts`,
  //     output: {
  //       file: `/dist/index.d.ts`,
  //       format: "es",
  //     },
  //     plugins: [dts()],
  //     external: ["vue-demi"],
  //   },
];

export default configs;
