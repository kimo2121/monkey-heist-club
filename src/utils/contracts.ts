import "@ethersproject/shims";
import { BigNumber, ethers } from "ethers";
import { getContractObj } from ".";
import { NFTMintEngineDetail } from "./typs";

export async function purchase(
  chainId: any,
  provider: any,
  numberOfTokens: any
) {
  const CoolAliensContract: any = getContractObj(
    "CoolAliens",
    chainId,
    provider
  );
  try {
    const nftPrice: BigNumber = await CoolAliensContract.PRICE();
    const tx = await CoolAliensContract.purchase(numberOfTokens, {
      value: nftPrice.mul(numberOfTokens),
    });
    await tx.wait(1);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function getEngineInfo(chainId: any, library: any) {
  const CoolAliensContract: any = getContractObj(
    "CoolAliens",
    chainId,
    library
  );
  try {
    const [totalSupply, maxSupply, mintPrice, purchaseLimit] =
      await Promise.all([
        CoolAliensContract.totalSupply(),
        CoolAliensContract.ALIENS_MAX(),
        CoolAliensContract.PRICE(),
        CoolAliensContract.PURCHASE_LIMIT(),
      ]);

    const nftMintDetail: NFTMintEngineDetail = {
      totalSupply: parseInt(totalSupply.toString()),
      maxSupply: parseInt(maxSupply.toString()),
      mintPrice: parseFloat(ethers.utils.formatEther(mintPrice)),
      purchaseLimit: parseInt(purchaseLimit.toString()),
    };

    return nftMintDetail;
  } catch (e) {
    console.log(e);
    return null;
  }
}
