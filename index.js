const Web3 = require("web3");
const { ethers } = require("ethers"); // for nodejs only
require("dotenv").config();
const main = async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://kovan.infura.io/v3/" + process.env.INFURA_PROJECT_ID
  );
  const aggregatorV3InterfaceABI = [
    {
      inputs: [
        {
          internalType: "address",
          name: "_base",
          type: "address",
        },
        {
          internalType: "address",
          name: "_quote",
          type: "address",
        },
        {
          internalType: "uint8",
          name: "_decimals",
          type: "uint8",
        },
      ],
      name: "getDerivedPrice",
      outputs: [
        {
          internalType: "int256",
          name: "",
          type: "int256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  const addr = "0x09a6b5D71F05DA56816EdC3762d214Ef041F464d";
  const priceFeed = new ethers.Contract(
    addr,
    aggregatorV3InterfaceABI,
    provider
  );
  const res = await priceFeed.getDerivedPrice(
    "0x6135b13325bfC4B00278B4abC5e20bbce2D6580e",
    "0x0c15Ab9A0DB086e062194c273CC79f41597Bbf13",
    8
  );
  console.log('Є '+(res.toNumber() / Math.pow(10, 8)).toFixed(2));
};

main();


//0xA4056F875B0D973bfcFF58687442669945a49477