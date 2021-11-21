import { Contract } from "@ethersproject/contracts";
import CoolAliensABI from "../contracts/CoolAliens.json";

export const Networks = {
  ETHMainNet: 1,
  MainNet: 56,
  Testnet: 97,
  Rinkeby: 4,
  Kovan: 42,
};

export const CONTRACTS_BY_NETWORK = {
  [Networks.ETHMainNet]: {
    CoolAliens: {
      address: "0xeFc21F66b43BA257dd8d3B2627505f87197f0909",
      abi: CoolAliensABI,
    },
  },
  [Networks.MainNet]: {
    CoolAliens: {
      address: "0x92468D243209f4fbD9dF42256325EB4AaB1E345e",
      abi: CoolAliensABI,
    },
  },
  [Networks.Testnet]: {
    CoolAliens: {
      address: "0x92468D243209f4fbD9dF42256325EB4AaB1E345e",
      abi: CoolAliensABI,
    },
  },
  [Networks.Rinkeby]: {
    CoolAliens: {
      address: "0xB7148d9E91a38759927ceb7CC392Ab7fcC77a779",
      abi: CoolAliensABI,
    },
  },
  [Networks.Kovan]: {
    CoolAliens: {
      address: "0x92468D243209f4fbD9dF42256325EB4AaB1E345e",
      abi: CoolAliensABI,
    },
  },
};

export const currentNetwork: any = process.env.REACT_APP_NETWORK_ID;

export const baseApiUrl = process.env.REACT_APP_API_URL;

export function getContractInfo(name: any, chainId: any = null) {
  if (!chainId) chainId = currentNetwork;

  const contracts: any = CONTRACTS_BY_NETWORK?.[chainId];
  if (contracts) {
    return contracts?.[name];
  } else {
    return null;
  }
}

export function truncateWalletString(walletAddress: any) {
  if (!walletAddress) return walletAddress;
  const lengthStr = walletAddress.length;
  const startStr = walletAddress.substring(0, 7);
  const endStr = walletAddress.substring(lengthStr - 7, lengthStr);
  return startStr + "..." + endStr;
}

export function truncateHashString(txhash: any) {
  if (!txhash) return txhash;
  const lengthStr = txhash.length;
  const startStr = txhash.substring(0, 10);
  const endStr = txhash.substring(lengthStr - 10, lengthStr);
  return startStr + "..." + endStr;
}

export function getContractObj(name: any, chainId: any, provider: any) {
  const info = getContractInfo(name, chainId);
  return !!info && new Contract(info.address, info.abi, provider);
}

export function getContractObjWithAddress(
  name: any,
  chainId: any,
  provider: any,
  contractAddress: any
) {
  const info = getContractInfo(name, chainId);
  return !!info && new Contract(contractAddress, info.abi, provider);
}

export const shorter = (str: any) =>
  str?.length > 8 ? str.slice(0, 6) + "..." + str.slice(-4) : str;
