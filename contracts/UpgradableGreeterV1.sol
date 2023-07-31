// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

// Refer: https://zenn.dev/razokulover/articles/708bcf4b9623c5
contract UpgradableGreeterV1 is Initializable {
    string greetingV1;
    string name;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    function initialize() public initializer {
        greetingV1 = "Hello, V1 World!";
    }

    function helloV1() public view returns (string memory) {
        // name に値があれば greetingV1 に name を付け足して返す
        if (bytes(name).length > 0) {
            return string(abi.encodePacked(greetingV1, " Hi, ", name, "!"));
        } else {
            return greetingV1;
        }
    }

    function setName(string memory _name) public {
        name = _name;
    }
}
