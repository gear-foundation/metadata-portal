import jsonData from "./chains.json";  // Dynamically generated datafile. Run `make collector` to create

export interface ChainSpec {
  name: string;
  iconPath: string;
  rpcEndpoint: string;
  genesisHash: string;
  color: string;
  unit: string;
  base58prefix: number;
  decimals: number;
  metadataVersion: number;
  logo: string;
  metadataQr: QrInfo;
  specsQr: QrInfo;
}

export interface QrInfo {
  path: string;
  signedBy?: string;
}

export interface Chains {
  [name: string]: ChainSpec;
}

export function getChains(): Chains {
  const chainList = jsonData.map((chain: object) =>
    Object.assign({} as ChainSpec, chain)
  );
  return chainList.reduce((obj: Chains, chain: ChainSpec) => {
    return {
      ...obj,
      [chain.name]: chain,
    };
  }, {});
}
