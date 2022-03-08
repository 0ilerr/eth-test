require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


const PRIVATE_KEY = "wallet";
const bscScanApiKey = "xx";
const polygonScanApiKey = "xx";
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      forking: {
        url: "HTTP://127.0.0.1:7545"
      }
    },
    bsc: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [`${PRIVATE_KEY}`]
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      accounts: [`${PRIVATE_KEY}`]
    }

  },

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://bscscan.com/
    apiKey: {
      bscTestnet: bscScanApiKey,
      polygonMumbai: polygonScanApiKey
    }
  }
};
