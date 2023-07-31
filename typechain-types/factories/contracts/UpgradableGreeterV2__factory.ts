/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  UpgradableGreeterV2,
  UpgradableGreeterV2Interface,
} from "../../contracts/UpgradableGreeterV2";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [],
    name: "helloV1",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "helloV2",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initializeV2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "returnV1StateFromV2",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060008060019054906101000a900460ff16159050808015620000445750600160008054906101000a900460ff1660ff16105b806200007b57506200005c306200015e60201b60201c565b1580156200007a5750600160008054906101000a900460ff1660ff16145b5b620000bd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000b49062000208565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015620000fb576001600060016101000a81548160ff0219169083151502179055505b8015620001575760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516200014e919062000284565b60405180910390a15b50620002a1565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000620001f0602e8362000181565b9150620001fd8262000192565b604082019050919050565b600060208201905081810360008301526200022381620001e1565b9050919050565b6000819050919050565b600060ff82169050919050565b6000819050919050565b60006200026c6200026662000260846200022a565b62000241565b62000234565b9050919050565b6200027e816200024b565b82525050565b60006020820190506200029b600083018462000273565b92915050565b610aeb80620002b16000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630f1fa2c51461005c57806318c113f31461007a5780634e5e6b7a146100985780635cd8a76b146100b65780638129fc1c146100c0575b600080fd5b6100646100ca565b60405161007191906105af565b60405180910390f35b61008261015c565b60405161008f91906105af565b60405180910390f35b6100a061023d565b6040516100ad91906105af565b60405180910390f35b6100be6102cf565b005b6100c8610381565b005b6060600180546100d990610600565b80601f016020809104026020016040519081016040528092919081815260200182805461010590610600565b80156101525780601f1061012757610100808354040283529160200191610152565b820191906000526020600020905b81548152906001019060200180831161013557829003601f168201915b5050505050905090565b6060600260009054906101000a900460ff166101ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a49061067d565b60405180910390fd5b600380546101ba90610600565b80601f01602080910402602001604051908101604052809291908181526020018280546101e690610600565b80156102335780601f1061020857610100808354040283529160200191610233565b820191906000526020600020905b81548152906001019060200180831161021657829003601f168201915b5050505050905090565b60606001805461024c90610600565b80601f016020809104026020016040519081016040528092919081815260200182805461027890610600565b80156102c55780601f1061029a576101008083540402835291602001916102c5565b820191906000526020600020905b8154815290600101906020018083116102a857829003601f168201915b5050505050905090565b600260009054906101000a900460ff161561031f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610316906106e9565b60405180910390fd5b6001600260006101000a81548160ff0219169083151502179055506040518060400160405280601081526020017f48656c6c6f2c20563220576f726c6421000000000000000000000000000000008152506003908161037e91906108ee565b50565b60008060019054906101000a900460ff161590508080156103b25750600160008054906101000a900460ff1660ff16105b806103df57506103c1306104fc565b1580156103de5750600160008054906101000a900460ff1660ff16145b5b61041e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041590610a32565b60405180910390fd5b60016000806101000a81548160ff021916908360ff160217905550801561045b576001600060016101000a81548160ff0219169083151502179055505b6040518060400160405280601081526020017f48656c6c6f2c20563120576f726c6421000000000000000000000000000000008152506001908161049f91906108ee565b5080156104f95760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516104f09190610a9a565b60405180910390a15b50565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561055957808201518184015260208101905061053e565b60008484015250505050565b6000601f19601f8301169050919050565b60006105818261051f565b61058b818561052a565b935061059b81856020860161053b565b6105a481610565565b840191505092915050565b600060208201905081810360008301526105c98184610576565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061061857607f821691505b60208210810361062b5761062a6105d1565b5b50919050565b7f4e6f7420696e697469616c697a65642056320000000000000000000000000000600082015250565b600061066760128361052a565b915061067282610631565b602082019050919050565b600060208201905081810360008301526106968161065a565b9050919050565b7f416c726561647920696e697469616c697a656420563200000000000000000000600082015250565b60006106d360168361052a565b91506106de8261069d565b602082019050919050565b60006020820190508181036000830152610702816106c6565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261079a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261075d565b6107a4868361075d565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006107eb6107e66107e1846107bc565b6107c6565b6107bc565b9050919050565b6000819050919050565b610805836107d0565b610819610811826107f2565b84845461076a565b825550505050565b600090565b61082e610821565b6108398184846107fc565b505050565b5b8181101561085d57610852600082610826565b60018101905061083f565b5050565b601f8211156108a25761087381610738565b61087c8461074d565b8101602085101561088b578190505b61089f6108978561074d565b83018261083e565b50505b505050565b600082821c905092915050565b60006108c5600019846008026108a7565b1980831691505092915050565b60006108de83836108b4565b9150826002028217905092915050565b6108f78261051f565b67ffffffffffffffff8111156109105761090f610709565b5b61091a8254610600565b610925828285610861565b600060209050601f8311600181146109585760008415610946578287015190505b61095085826108d2565b8655506109b8565b601f19841661096686610738565b60005b8281101561098e57848901518255600182019150602085019450602081019050610969565b868310156109ab57848901516109a7601f8916826108b4565b8355505b6001600288020188555050505b505050505050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000610a1c602e8361052a565b9150610a27826109c0565b604082019050919050565b60006020820190508181036000830152610a4b81610a0f565b9050919050565b6000819050919050565b600060ff82169050919050565b6000610a84610a7f610a7a84610a52565b6107c6565b610a5c565b9050919050565b610a9481610a69565b82525050565b6000602082019050610aaf6000830184610a8b565b9291505056fea2646970667358221220d87631e0abab42cdcbd7b63b54744ad1fb09a9f69bdc0e03fa524698bf53052c64736f6c63430008130033";

type UpgradableGreeterV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UpgradableGreeterV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UpgradableGreeterV2__factory extends ContractFactory {
  constructor(...args: UpgradableGreeterV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      UpgradableGreeterV2 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): UpgradableGreeterV2__factory {
    return super.connect(runner) as UpgradableGreeterV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradableGreeterV2Interface {
    return new Interface(_abi) as UpgradableGreeterV2Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): UpgradableGreeterV2 {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as UpgradableGreeterV2;
  }
}
