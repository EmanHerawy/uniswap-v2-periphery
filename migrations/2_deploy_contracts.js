const SeaSwapV2Router02 = artifacts.require("SeaSwapV2Router02");
const WETH9 = artifacts.require("WETH9");
module.exports = async function (deployer, network, accounts) {
  // Use deployer to state migration tasks.
   // set address based on network 
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
    const factory = "0x3488b1A29157A49F4029C28acB1625Cf8a2Cd73F";
       return ({factory, weth})
  } else if (network === 'ropsten' || network === 'ropsten-fork') {
    //https://ropsten.etherscan.io/token/0xb603cea165119701b58d56d10d2060fbfb3efad8
    const weth = "0xb603cea165119701b58d56d10d2060fbfb3efad8";
    const factory = "0xa90CE65203cB9Bf7e2c1c47549C2bf6296CECB32";
    return ({factory, weth})
  } else if (network === 'kovan') {
    const weth  ="" //TODO;
    const factory  ="" //TODO;
    return ({factory, weth})
  } else if (network === 'main') {
      // https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2

    const weth = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
    const factory ="" //TODO;
    return ({factory, weth})
  } else {
    return (null,null)
  }
}