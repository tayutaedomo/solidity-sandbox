// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract AccessControlContract is AccessControl {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant HELLO_ROLE = keccak256("HELLO_ROLE");

    constructor() {
        _grantRole(ADMIN_ROLE, msg.sender);
        _grantRole(HELLO_ROLE, msg.sender);
        _setRoleAdmin(HELLO_ROLE, ADMIN_ROLE);
    }

    function grantHelloRole(
        address[] memory accounts
    ) external onlyRole(ADMIN_ROLE) {
        for (uint256 i = 0; i < accounts.length; i++) {
            grantRole(HELLO_ROLE, accounts[i]);
        }
    }

    function revokeHelloRole(
        address[] memory accounts
    ) external onlyRole(ADMIN_ROLE) {
        for (uint256 i = 0; i < accounts.length; i++) {
            revokeRole(HELLO_ROLE, accounts[i]);
        }
    }
}
