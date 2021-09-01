# vercel-esm-import-bug

Importing a pure ESM module like node-fetch ([as of v3.0.0](https://github.com/node-fetch/node-fetch#loading-and-configuring-the-module)) in a TS function causes a runtime error about using `import` instead of `require()` (which [we are...](https://github.com/jakejarvis/vercel-esm-import-bug/blob/main/index.ts#L1)):

https://vercel-esm-import-bug.vercel.app/

```
2021-09-01T23:19:58.908Z	undefined	ERROR	Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: /var/task/node_modules/node-fetch/src/index.js
require() of ES modules is not supported.
require() of /var/task/node_modules/node-fetch/src/index.js from /var/task/index.js is an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which defines all .js files in that package scope as ES modules.
Instead rename /var/task/node_modules/node-fetch/src/index.js to end in .cjs, change the requiring code to use import(), or remove "type": "module" from /var/task/node_modules/node-fetch/package.json.
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1089:13)
    at Module.load (internal/modules/cjs/loader.js:937:32)
    at Function.Module._load (internal/modules/cjs/loader.js:778:12)
    at Module.require (internal/modules/cjs/loader.js:961:19)
    at require (internal/modules/cjs/helpers.js:92:18)
    at Object.<anonymous> (/vercel/path0/index.ts:1:1)
    at Module._compile (internal/modules/cjs/loader.js:1072:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
    at Module.load (internal/modules/cjs/loader.js:937:32)
    at Function.Module._load (internal/modules/cjs/loader.js:778:12) {
  code: 'ERR_REQUIRE_ESM'
}
RequestId: 2ce4dae6-d9c1-4f05-a66b-9fa8dee16e2e Error: Runtime exited with error: exit status 1
Runtime.ExitError
```
