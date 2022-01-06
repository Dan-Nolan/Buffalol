//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol";
import "@uniswap/v2-core/contracts/interfaces/IERC20.sol";

import "hardhat/console.sol";

// Uniswap loans you 1200 buffalol 
//    -> you get the execution context (arbitrage)
// payback uniswap 1204 buffalol  
// if you don't REVERT
contract FlashLoan {
    IUniswapV2Pair pair = IUniswapV2Pair(0xc3045CB03C80130b32958dAC7D0e86d5EfCF27f8);
    IERC20 erc20 = IERC20(0x4d26Df33f0bdDD567Db8c8fdEE4acc34E375106f);

    function execute() external {
        // amount0, amount1, receiver, data
        pair.swap(1200 * 10 ** 18, 0, address(this), "0xa");
    }

    function uniswapV2Call(address, uint, uint, bytes calldata) external {
        // during this execution we should have ourselves 1200 buffalol
        console.log(erc20.balanceOf(address(this)));

        erc20.transfer(msg.sender, 1204 * 10 ** 18);
    }
}
