

const main = async () =>{

  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy("Hello, Hardhat!");

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
}
cd 