// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

// Refer: https://zenn.dev/razokulover/articles/708bcf4b9623c5
contract UpgradableGreeterV1 is Initializable {
    string greetingV1;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    function initialize() public initializer {
        greetingV1 = "Hello, V1 World!";
    }

    function helloV1() public view returns (string memory) {
        return greetingV1;
    }
}
