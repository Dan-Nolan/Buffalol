const BUFFALOL_ADDRESS = "0x4d26Df33f0bdDD567Db8c8fdEE4acc34E375106f";

async function main() {
  const Governor = await hre.ethers.getContractFactory("Governor");
  const governor = await Governor.deploy(BUFFALOL_ADDRESS);
  await governor.deployed();

  console.log("Governor deployed to:", governor.address);

  const Leaderboard = await hre.ethers.getContractFactory("Leaderboard");
  const leaderboard = await Leaderboard.deploy(governor.address);
  await leaderboard.deployed();

  console.log("Leaderboard deployed to:", leaderboard.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
