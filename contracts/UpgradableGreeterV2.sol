// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "hardhat/console.sol";
import "./UpgradableGreeterV1.sol";

// Refer: https://zenn.dev/razokulover/articles/708bcf4b9623c5
contract UpgradableGreeterV2 is UpgradableGreeterV1 {
    bool initializedV2;
    string greetingV2;

    function initializeV2() public {
        require(!initializedV2, "Already initialized V2");
        initializedV2 = true;
        greetingV2 = "Hello, V2 World!";
    }

    function helloV2() public view returns (string memory) {
        require(initializedV2, "Not initialized V2");
        return greetingV2;
    }

    function returnV1StateFromV2() public view returns (string memory) {
        return greetingV1;
    }
}
