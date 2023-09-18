// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract SimpleAccessControl is AccessControl {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant HELLO_ROLE = keccak256("HELLO_ROLE");

    constructor() {
        _grantRole(ADMIN_ROLE, msg.sender);
        _grantRole(HELLO_ROLE, msg.sender);
        _setRoleAdmin(HELLO_ROLE, ADMIN_ROLE);
    }

    function hello() public view onlyRole(HELLO_ROLE) returns (string memory) {
        return "hello";
    }

    function grantHelloRole(
        address[] memory accounts
    ) public onlyRole(ADMIN_ROLE) {
        for (uint256 i = 0; i < accounts.length; i++) {
            grantRole(HELLO_ROLE, accounts[i]);
        }
    }

    function revokeHelloRole(
        address[] memory accounts
    ) public onlyRole(ADMIN_ROLE) {
        for (uint256 i = 0; i < accounts.length; i++) {
            revokeRole(HELLO_ROLE, accounts[i]);
        }
    }
}
