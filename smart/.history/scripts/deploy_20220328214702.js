

const main = async () =>{

  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");

  await greeter.deployed();

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