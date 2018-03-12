pragma solidity ^0.4.4;


contract Hello {
  string message = "Hello Eth";

  function Hello() {
    // constructor
  }

  function getMessage() returns (string) {
    return message;
  }
}
