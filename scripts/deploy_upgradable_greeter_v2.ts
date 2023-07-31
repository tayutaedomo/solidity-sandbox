import { ethers, upgrades } from "hardhat";

async function main() {
  const v1Address = process.env.GREETER_V1_ADDRESS || "";
  const GreeterV2 = await ethers.getContractFactory("UpgradableGreeterV2");
  const greeterV2 = await upgrades.upgradeProxy(v1Address, GreeterV2);
  await greeterV2.waitForDeployment();
  console.log("Greeter V2 deployed to:", await greeterV2.getAddress());

  await greeterV2.initializeV2();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
