// 

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks:{
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/7W-kyfTuxOlgTzmDCq6yEfUZCGYcqPrZ',
      accounts:['92c1c5667b8714c02cea1a964b7c66f16ab1e5995a0b24a5696783edd6996ab1']
    }
  }
}