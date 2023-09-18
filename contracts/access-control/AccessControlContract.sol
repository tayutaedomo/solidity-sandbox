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
}
