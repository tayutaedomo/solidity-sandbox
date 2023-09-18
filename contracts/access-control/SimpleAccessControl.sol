// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract SimpleAccessControl is AccessControl {
    constructor() {}

    function hello() public pure returns (string memory) {
        return "hello";
    }
}
