const SeaSwapV2Router02 = artifacts.require("SeaSwapV2Router02");
const WETH9 = artifacts.require("WETH9");
module.exports = async function (deployer, network, accounts) {
  // Use deployer to state migration tasks.
   // set address based on network 
   console.log(network,'network');
  const {
    factory,
    weth
  } = await getAddress(network,deployer);
console.log(factory,
  weth,'factory,weth');


  await deployer.deploy(SeaSwapV2Router02, factory, weth);

};

async function getAddress(network, deployer) {
  if (network === 'development') {
    await deployer.deploy(WETH9);
    const weth =WETH9.address;
    const factory = "";
       return ({factory, weth})
  } else if (network === 'ropsten' || network === 'ropsten-fork') {
    //https://ropsten.etherscan.io/token/0xb603cea165119701b58d56d10d2060fbfb3efad8
    const weth = "0xc778417E063141139Fce010982780140Aa0cD5Ab";
    // const weth = "0xb603cea165119701b58d56d10d2060fbfb3efad8";
    const factory = "0xc45c27d4ef6A0224F5927b38252B4919E6892Dfd";
    // old
    // const factory = "0xa90CE65203cB9Bf7e2c1c47549C2bf6296CECB32";
    return ({factory, weth})
  } else if (network === 'kovan') {
    const weth  ="" //TODO;
    const factory  ="" //TODO;
    return ({factory, weth})
  } else if (network === 'mainnet') {
      // https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2

    const weth = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
    const factory ="0x2a3f3f53c836dc720aa855f9ec2c34bd2d6e8092" //TODO;
    return ({factory, weth})
  } else {
    return (null,null)
  }
}