const projectConfig = {
  nftName: 'YoungApePixelClub',

  nftSymbol: 'YAPC',

  maxSupply: 10000,

  maxMintAmountPerTxn: 30,

  mintCost: process.env.NODE_ENV === 'production' ? 0.1 : 0.1,

  networkName:
    process.env.NODE_ENV === 'production'
      ? 'Polygon Mainnet' // 'Ethereum Mainnet'
      : 'Mumbai Testnet', // 'Rinkeby Testnet'

  chainName: 'MATIC', // 'ETH'

  chainId: process.env.NODE_ENV === 'production' ? 137 : 80001, // Ethereum (1), Rinkeby (4)

  siteDomain: 'www.youngapepixelclub.com',

  siteUrl:
    process.env.NODE_ENV === 'production'
      ? `https://youngapepixelclub.vercel.app/`
      : 'http://localhost:3000',

  twitterUsername: '@YoungApePC',

  twitterUrl: 'https://twitter.com/YoungApePC',

  discordUrl: 'https://discord.gg/t66kgCWMrK',

  openseaCollectionUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://opensea.io/collection/youngapepixelclub'
      : '',

  contractAddress:
    process.env.NODE_ENV === 'production'
      ? '0x5e6428905763a5A568350BDA17F3BEb6E2793C03'
      : '',

  scanUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://polygonscan.com/address/0x5e6428905763a5a568350bda17f3beb6e2793c03'
      : '',
  // 'https://etherscan.io/address/your_ethereum_contract_address'
  // 'https://rinkeby.etherscan.io/address/your_rinkeby_contract_address'
};

export default projectConfig;
