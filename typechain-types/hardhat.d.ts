/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "UpgradableGreeterV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UpgradableGreeterV1__factory>;
    getContractFactory(
      name: "UpgradableGreeterV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UpgradableGreeterV2__factory>;

    getContractAt(
      name: "Initializable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "UpgradableGreeterV1",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.UpgradableGreeterV1>;
    getContractAt(
      name: "UpgradableGreeterV2",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.UpgradableGreeterV2>;

    deployContract(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Initializable>;
    deployContract(
      name: "UpgradableGreeterV1",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.UpgradableGreeterV1>;
    deployContract(
      name: "UpgradableGreeterV2",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.UpgradableGreeterV2>;

    deployContract(
      name: "Initializable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Initializable>;
    deployContract(
      name: "UpgradableGreeterV1",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.UpgradableGreeterV1>;
    deployContract(
      name: "UpgradableGreeterV2",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.UpgradableGreeterV2>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
