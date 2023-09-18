import { ethers, upgrades } from "hardhat";

async function main() {
  const GreeterV1 = await ethers.getContractFactory("UpgradableGreeterV1");
  const greeterV1 = await upgrades.deployProxy(GreeterV1, [], {
    initializer: "initialize",
  });
  await greeterV1.waitForDeployment();
  const v1Address = await greeterV1.getAddress();
  console.log("Greeter V1 deployed to:", v1Address);

  await greeterV1.setName("Taro");
  console.log("greeterV1.helloV1():", await greeterV1.helloV1());

  const GreeterV2 = await ethers.getContractFactory("UpgradableGreeterV2");
  const greeterV2 = await upgrades.upgradeProxy(v1Address, GreeterV2);
  await greeterV2.waitForDeployment();
  console.log("Greeter V2 deployed to:", await greeterV2.getAddress());
  await greeterV2.initializeV2();

  console.log("greeterV2.helloV1():", await greeterV2.helloV1());
  console.log("greeterV2.helloV2():", await greeterV2.helloV2());

  await greeterV2.setName("Hanako");
  console.log("greeterV2.helloV1():", await greeterV2.helloV1());
  console.log("greeterV2.helloV1():", await greeterV2.helloV2());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
