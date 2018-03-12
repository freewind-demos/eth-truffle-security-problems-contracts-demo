Eth Truffle Hello World Demo
===========================

The code is basically followed by these two articles:

- Coding: <https://medium.com/etherereum-salon/hello-ethereum-solan-contract-4643118a6119>

- Testing: <https://medium.com/etherereum-salon/eth-testing-472c2f73b4c3>

Steps in summary
----------------

- `npm install -g solc truffle ethereumjs-testrpc`
- `truffle init`
- `truffle create contract Hello`
- add code to `Hello.sol`
- `truffle create test Hello`, a `hello.js` created for testing (with `mocha`)
- add code in `hello.js`
- start eth simulator `testrpc`
- add `Hello` things to `1_initial_migrations.js`
- run `truffle test`
