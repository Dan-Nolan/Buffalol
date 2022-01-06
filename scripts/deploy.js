async function main() {
  const Buffalol = await hre.ethers.getContractFactory("Buffalol");
  const buffalol = await Buffalol.deploy();
  await buffalol.deployed();

  console.log("Buffalol deployed to:", buffalol.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
