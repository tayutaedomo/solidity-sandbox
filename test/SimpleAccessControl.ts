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

  describe("Deployment", function () {
    it("should set the right owner", async function () {
      const { accessControl, owner } = await loadFixture(deployContract);
      expect(
        await accessControl.hasRole(
          await accessControl.ADMIN_ROLE(),
          owner.address,
        ),
      ).to.equal(true);
    });

    it("Owner should have HELLO_ROLE", async function () {
      const { accessControl, owner } = await loadFixture(deployContract);
      expect(
        await accessControl.hasRole(
          await accessControl.HELLO_ROLE(),
          owner.address,
        ),
      ).to.equal(true);
    });
  });

  describe("hello", function () {
    it("should return correct value", async function () {
      const { accessControl, owner } = await loadFixture(deployContract);
      expect(await accessControl.connect(owner).hello()).to.equal("hello");
    });

    it("should revert if not role granted", async function () {
      const { accessControl, account1 } = await loadFixture(deployContract);
      await expect(accessControl.connect(account1).hello()).to.be.revertedWith(
        "Caller does'n have a HELLO_ROLE",
      );
    });
  });
});
