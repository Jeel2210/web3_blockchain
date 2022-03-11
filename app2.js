let Web3 = require('web3');
let rpcUrl ='https://mainnet.infura.io/v3/3ca9a874d87940e099155bb366a4ee75'
let web3= new Web3(rpcUrl)

web3.eth.getBlockNumber().then(console.log)
// 0xaF5529fd1ab65C912cdd049e9eCc334A39fC51B3

const address = "0xaF5529fd1ab65C912cdd049e9eCc334A39fC51B3"
// console.log(address);
web3.eth.getBalance(address,(err, balance) => {console.log(balance);})


// console.log("Rpc==>",rpcUrl,web3);

// console.log(Web3);