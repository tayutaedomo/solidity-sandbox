import { ethers, upgrades } from "hardhat";

async function main() {
  const Greeter = await ethers.getContractFactory("UpgradableGreeterV1");
  const greeter = await upgrades.deployProxy(Greeter, [], {
    initializer: "initialize",
  });
  await greeter.waitForDeployment();
  console.log("Greeter V1 deployed to:", await greeter.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
