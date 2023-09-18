// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./IAccessControlContract.sol";

contract AccessControlCaller {
    address public accessControlContractAddr;

    modifier onlyHelloRole() {
        require(
            IAccessControlContract(accessControlContractAddr).hasRole(
                keccak256("HELLO_ROLE"),
                msg.sender
            ),
            "Caller doesn't have HELLO_ROLE"
        );
        _;
    }

    constructor(address _accessControlContractAddr) {
        accessControlContractAddr = _accessControlContractAddr;
    }

    function hello() external view onlyHelloRole returns (string memory) {
        return "hello";
    }
}
