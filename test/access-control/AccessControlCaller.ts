import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("AccessControlCaller", function () {
  async function deployContract() {
    const [owner, account1, account2] = await ethers.getSigners();

    const AccessControlContract = await ethers.getContractFactory(
      "AccessControlContract",
    );
    const accessControlContract = await AccessControlContract.deploy();

    const AccessControlCaller = await ethers.getContractFactory(
      "AccessControlCaller",
    );
    const accessControlCaller = await AccessControlCaller.deploy(
      accessControlContract,
    );

    return {
      owner,
      account1,
      account2,
      accessControlContract,
      accessControlCaller,
    };
  }

  describe("Deployment", function () {
    it("should set the right owner", async function () {
      const { accessControlContract, accessControlCaller } = await loadFixture(
        deployContract,
      );
      expect(await accessControlCaller.accessControlContractAddr()).to.equal(
        await accessControlContract.getAddress(),
      );
    });
  });
});
