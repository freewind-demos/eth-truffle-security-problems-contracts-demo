const Hello  = artifacts.require('./Hello.sol');

contract('Hello.getMessage', function(accounts) {
  it("should return a correct string", function(done) { 
    const hello = Hello.deployed();
    hello.then(function(contract) {
      // instead of using `getMessage()`
      return contract.getMessage.call();
    }).then(function(result) {
      assert.isTrue(result === 'Hello Eth');
      done();
    })
  });
});
