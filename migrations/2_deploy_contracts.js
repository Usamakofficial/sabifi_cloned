/* eslint-disable no-undef */
const SabifiNFT = artifacts.require('SabifiNFT')

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(SabifiNFT, 'Sabifi NFTs', 'SBF', 10, accounts[0])
}