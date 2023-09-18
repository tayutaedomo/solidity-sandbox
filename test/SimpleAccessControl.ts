import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("SimpleAccessControl", function () {
  async function deployContract() {
    const [owner, account1] = await ethers.getSigners();

    const AccessControl = await ethers.getContractFactory(
      "SimpleAccessControl",
    );
    const accessControl = await AccessControl.deploy();

    return { owner, account1, accessControl };
  }

  describe("hello", function () {
    it("should return correct value", async function () {
      const { accessControl } = await loadFixture(deployContract);

      expect(await accessControl.hello()).to.equal("hello");
    });
  });
});
