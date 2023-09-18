import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("AccessControlContract", function () {
  async function deployContract() {
    const [owner, account1] = await ethers.getSigners();

    const AccessControlContract = await ethers.getContractFactory(
      "AccessControlContract",
    );
    const accessControlContract = await AccessControlContract.deploy();

    return {
      owner,
      account1,
      accessControlContract,
    };
  }

  describe("Deployment", function () {
    it("should set the right owner", async function () {
      const { accessControlContract, owner } = await loadFixture(
        deployContract,
      );
      expect(
        await accessControlContract.hasRole(
          await accessControlContract.ADMIN_ROLE(),
          owner.address,
        ),
      ).to.equal(true);
    });

    it("Owner should have HELLO_ROLE", async function () {
      const { accessControlContract, owner } = await loadFixture(
        deployContract,
      );
      expect(
        await accessControlContract.hasRole(
          await accessControlContract.HELLO_ROLE(),
          owner.address,
        ),
      ).to.equal(true);
    });
  });
});
