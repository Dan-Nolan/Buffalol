//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Buffalol is ERC20 {
    constructor() ERC20("Buffalol", "BLL") {
        _mint(msg.sender, 10000 * 10 ** 18);
    }
}

// 10000 BUFFALOL
// 100 to each of all of you!
// 1500 uniswap pool
