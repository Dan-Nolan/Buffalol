const accounts = [
    "0x296903b6049161bebEc75F6f391a930bdDBDbbFc", // marco
    "0x11a9E352394aDD8596594422A6d8ceA59B73aF0e", // rodrigo
    "0xf58A67ef50dd157Ea89F7cdeeb0d1D49623EE6CE", // chris
    "0x2ADFbed419016e776460DBeCdA52cEedb45b2658", // fernando
    "0x9746803C40C2F3B29EB3290C340010da5e96ff74", // aaron
    "0xDba4C17C41791FC7adB207386920140EDF898603", // mark
    "0x7c6372B5698Dc66142Fb54242b9C935Dd1F4d3cA", // hao
    "0x715358348287f44c8113439766b9433282110F6c", // carlos
    "0x9a1d3D96976669980C5087010b7dFEd87BDCA541", // rati
]
const CONTRACT_ADDR = "0x4d26Df33f0bdDD567Db8c8fdEE4acc34E375106f";

async function main() {
    const buffalol = await hre.ethers.getContractAt("Buffalol", CONTRACT_ADDR);

    const [addr0] = await hre.ethers.provider.listAccounts();
    const nonce = await hre.ethers.provider.getTransactionCount(addr0);
    for(let i = 0; i < accounts.length; i++) {
        await buffalol.transfer(accounts[i], ethers.utils.parseEther("100"), {
            nonce: nonce + i
        });
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
