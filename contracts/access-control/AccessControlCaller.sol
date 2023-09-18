// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract AccessControlCaller {
    address public accessControlContractAddr;

    constructor(address _accessControlContractAddr) {
        accessControlContractAddr = _accessControlContractAddr;
    }

    function hello() public pure returns (string memory) {
        return "hello";
    }
}
