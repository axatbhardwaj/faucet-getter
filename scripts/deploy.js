const { ethers } = require('hardhat')
const path = require("path");


async function main() {
    const FaucetGetter = await ethers.getContractFactory("FaucetGetter");
    const faucetgetter = await FaucetGetter.deploy();
    await faucetgetter.deployed();
    let contractAddress = faucetgetter.address;
    console.log("Deployed FaucetGetter:", contractAddress);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.



main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
