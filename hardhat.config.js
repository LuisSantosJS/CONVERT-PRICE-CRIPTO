require('dotenv').config()
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.7",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
    bscMainnet:{
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      // gasPrice: 20000000000,
      accounts: [`${process.env.PRIVATE_KEY2}`]
    }

  }
};
