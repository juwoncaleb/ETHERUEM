

const main = async () =>{

  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy("Hello, Hardhat!");

  await Transactions.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

const runMain = async ()=>{
  try {
    await main()
    process.exist(0)
  } catch (error) {
    process.exist(1);
  }
}

runMain();