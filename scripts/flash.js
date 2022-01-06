async function main() {
    const FlashLoan = await hre.ethers.getContractFactory("FlashLoan");
    const flashloan = await FlashLoan.deploy();
    await flashloan.deployed();

    console.log(flashloan.address);

    await flashloan.execute();
}

main();