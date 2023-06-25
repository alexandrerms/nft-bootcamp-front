require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.1",
  etherscan: {
    // Sua chave API key do Etherscan
    // Obtenha a sua em https://etherscan.io/
    apiKey:process.env.etherscan_apikey,
  },
  networks: {
    sepolia: {
      url: process.env.STAGING_SEPOLIA_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: process.env.STAGING_GOERLI_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    mumbai: {
      url: process.env.STAGING_MUMBAI_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    hardhat: {
      accounts: [
        {
          privateKey: process.env.PRIVATE_KEY,
          balance: '1000000000000000000000' // 1000 ETH
        }
      ]
    },
  },
};
