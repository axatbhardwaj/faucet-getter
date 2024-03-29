require('@nomiclabs/hardhat-ethers');
require('dotenv').config();

module.exports = {
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    hardhat: {},
    telosTestnet: {
      url: 'https://testnet.telos.net/evm',
      accounts: [process.env.CONTRACT_DEPLOYER_PRIVATE_KEY],
      networkCheckTimeout: 30000,
    },
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY,
      goerli: process.env.ETHERSCAN_API_KEY,
      polygon: process.env.POLYGONSCAN_MAINNET_API_KEY,
      polygonMumbai: process.env.POLYGONSCAN_MAINNET_API_KEY,
    },
  },
};
