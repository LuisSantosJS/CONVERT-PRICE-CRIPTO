const { ethers } = require("ethers");
require("dotenv").config();
const main = async () => {
  const NODE_URL =
    "https://speedy-nodes-nyc.moralis.io/a439e42a9b230318d4d0d3b1/bsc/mainnet";
  const provider = new ethers.providers.JsonRpcProvider(NODE_URL);
  const signer = provider.getSigner();

  const abi = [
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
    {
      inputs: [
        {
          internalType: "address",
          name: "_base",
          type: "address",
        },
      ],
      name: "getLatestPrice",
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
  const addr = "0xA4056F875B0D973bfcFF58687442669945a49477";
  const priceFeed = new ethers.Contract(addr, abi, provider);
  priceFeed.connect(signer);

  const res = await priceFeed.getDerivedPrice(
    "0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf",
    "0x5cb1Cb3eA5FB46de1CE1D0F3BaDB3212e8d8eF48",
    8
  );
  console.log("R$ " + (res.toNumber() / Math.pow(10, 8)).toFixed(2));

  const res2 = await priceFeed.getLatestPrice(
    "0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf",
  );
  console.log("$ " + (res2.toNumber() / Math.pow(10, 8)).toFixed(2));
};

main();

//0xA4056F875B0D973bfcFF58687442669945a49477
