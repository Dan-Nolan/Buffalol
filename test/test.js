const { assert } = require("chai");
const { ethers } = require("hardhat");

describe("Governor", function () {
    let governor, buffalol, leaderboard;
    beforeEach(async () => {
        const Buffalol = await hre.ethers.getContractFactory("Buffalol");
        buffalol = await Buffalol.deploy();
        await buffalol.deployed();

        const Governor = await hre.ethers.getContractFactory("Governor");
        governor = await Governor.deploy(buffalol.address);
        await governor.deployed();

        const Leaderboard = await hre.ethers.getContractFactory("Leaderboard");
        leaderboard = await Leaderboard.deploy(governor.address);
        await leaderboard.deployed();
    });

    describe("a new proposal executed", () => {
        beforeEach(async () => {
            const calldata = leaderboard.interface.encodeFunctionData("addLeader", ["Dan"]);
            await governor.addProposal(calldata, leaderboard.address);
            await governor.vote(0, true);
            await governor.executeProposal(0);
        });

        it("should have a leader on the leaderboard", async () => {
            const leaders = await leaderboard.getAllLeaders();
            console.log(leaders);
            assert.equal(leaders.length, 1);
        });
    });
});
