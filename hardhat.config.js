require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: process.env.JSON_RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    hardhat: {
      forking: {
        url: process.env.JSON_RPC_URL,
        blockNumber: 6155200 
      }
    }
  }
};
