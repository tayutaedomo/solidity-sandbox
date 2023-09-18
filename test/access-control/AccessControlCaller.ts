import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("AccessControlCaller", function () {
  async function deployContract() {
    const [owner, account1] = await ethers.getSigners();

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

  describe("hello", function () {
    it("should return correct value", async function () {
      const { accessControlContract, accessControlCaller, owner, account1 } =
        await loadFixture(deployContract);
      expect(await accessControlCaller.connect(owner).hello()).to.equal(
        "hello",
      );

      await accessControlContract
        .connect(owner)
        .grantHelloRole([account1.address]);

      expect(await accessControlCaller.connect(account1).hello()).to.equal(
        "hello",
      );
    });

    it("should revert if not role granted", async function () {
      const { accessControlCaller, account1 } = await loadFixture(
        deployContract,
      );
      await expect(
        accessControlCaller.connect(account1).hello(),
      ).to.be.revertedWith("Caller doesn't have HELLO_ROLE");
    });
  });
});
