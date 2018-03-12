var Migrations = artifacts.require("./Migrations.sol");
const Hello = artifacts.require("./Hello.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Hello);
};
