import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("AccessControlContract", function () {
  async function deployContract() {
    const [owner, account1, account2] = await ethers.getSigners();

    const AccessControlContract = await ethers.getContractFactory(
      "AccessControlContract",
    );
    const accessControlContract = await AccessControlContract.deploy();

    return {
      owner,
      account1,
      account2,
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

  describe("Role Management", function () {
    it("should allow admin to grant and revoke HELLO_ROLE", async function () {
      const { accessControlContract, owner, account1, account2 } =
        await loadFixture(deployContract);

      await accessControlContract
        .connect(owner)
        .grantHelloRole([account1.address, account2.address]);
      expect(
        await accessControlContract.hasRole(
          await accessControlContract.HELLO_ROLE(),
          account1.address,
        ),
      ).to.equal(true);
      expect(
        await accessControlContract.hasRole(
          await accessControlContract.HELLO_ROLE(),
          account2.address,
        ),
      ).to.equal(true);

      await accessControlContract
        .connect(owner)
        .revokeHelloRole([account1.address, account2.address]);
      expect(
        await accessControlContract.hasRole(
          await accessControlContract.HELLO_ROLE(),
          account1.address,
        ),
      ).to.equal(false);
      expect(
        await accessControlContract.hasRole(
          await accessControlContract.HELLO_ROLE(),
          account2.address,
        ),
      ).to.equal(false);
    });
  });
});
