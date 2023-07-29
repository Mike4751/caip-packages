import { AssetIdParams, AssetTypeParams } from "caip/dist";
import { AssetNameParams } from "../../src/assetName";

// ChainId Data Points
export const CHAIN_ID_DELIMITER = ":";
export const CHAIN_ID_NAMESPACE = "hedera";
export const CHAIN_ID_REFERENCE = "mainnet";
export const CHAIN_ID_STRING =
  CHAIN_ID_NAMESPACE + CHAIN_ID_DELIMITER + CHAIN_ID_REFERENCE;
export const CHAIN_ID_PARAMS = {
  namespace: CHAIN_ID_NAMESPACE,
  reference: CHAIN_ID_REFERENCE,
};

// AccountId Data Points
export const ACCOUNT_ID_DELIMITER = ":";
export const ACCOUNT_ID_ADDRESS = "0.0.55492";
export const ACCOUNT_ID_ADDRESS_CHECKSUM = "0.0.55492-vfmkw";
export const ACCOUNT_ID_STRING =
  CHAIN_ID_STRING + ACCOUNT_ID_DELIMITER + ACCOUNT_ID_ADDRESS;
export const ACCOUNT_ID_STRING_CHECKSUM =
  CHAIN_ID_STRING + ACCOUNT_ID_DELIMITER + ACCOUNT_ID_ADDRESS_CHECKSUM;
export const ACCOUNT_ID_PARAMS = {
  chainId: CHAIN_ID_STRING,
  address: ACCOUNT_ID_ADDRESS,
};

export const ACCOUNT_ID_PARAMS_CHECKSUM = {
  chainId: CHAIN_ID_STRING,
  address: ACCOUNT_ID_ADDRESS_CHECKSUM,
};

export const ACCOUNT_ID_NESTED_PARAMS = {
  chainId: CHAIN_ID_PARAMS,
  address: ACCOUNT_ID_ADDRESS,
};

export const ACCOUNT_ID_NESTED_PARAMS_CHECKSUM = {
  chainId: CHAIN_ID_PARAMS,
  address: ACCOUNT_ID_ADDRESS_CHECKSUM,
};

// AssetName Data Points
export const ASSET_NAME_DELIMITER = ":";
export const ASSET_NAMESPACE = "nft";
export const ASSET_REFERENCE = "0.0.55492";
export const ASSET_REFERENCE_CHECKSUM = "0.0.55492-vfmkw";
export const ASSET_NAME_STRING = `${ASSET_NAMESPACE}${ASSET_NAME_DELIMITER}${ASSET_REFERENCE}`;
export const ASSET_NAME_STRING_CHECKSUM = `${ASSET_NAMESPACE}${ASSET_NAME_DELIMITER}${ASSET_REFERENCE_CHECKSUM}`;
export const ASSET_NAME_PARAMS: AssetNameParams = {
  namespace: ASSET_NAMESPACE,
  reference: ASSET_REFERENCE,
};

export const ASSET_NAME_PARAMS_CHECKSUM: AssetNameParams = {
  namespace: ASSET_NAMESPACE,
  reference: ASSET_REFERENCE_CHECKSUM,
};

// AssetType Data Points
export const ASSET_TYPE_STRING = `${CHAIN_ID_STRING}/${ASSET_NAME_STRING}`;
export const ASSET_TYPE_STRING_CHECKSUM = `${CHAIN_ID_STRING}/${ASSET_NAME_STRING_CHECKSUM}`;
export const ASSET_TYPE_PARAMS: AssetTypeParams = {
  chainId: CHAIN_ID_STRING,
  assetName: ASSET_NAME_STRING,
};

export const ASSET_TYPE_PARAMS_CHECKSUM: AssetTypeParams = {
  chainId: CHAIN_ID_STRING,
  assetName: ASSET_NAME_STRING_CHECKSUM,
};

export const ASSET_TYPE_NESTED_PARAMS: AssetTypeParams = {
  chainId: CHAIN_ID_PARAMS,
  assetName: ASSET_NAME_PARAMS,
};

export const ASSET_TYPE_NESTED_PARAMS_CHECKSUM: AssetTypeParams = {
  chainId: CHAIN_ID_PARAMS,
  assetName: ASSET_NAME_PARAMS_CHECKSUM,
};

// AssetId Data Points
export const TOKEN_ID = "12";
export const ASSET_ID_STRING = `${ASSET_TYPE_STRING}/${TOKEN_ID}`;
export const ASSET_ID_STRING_CHECKSUM = `${ASSET_TYPE_STRING_CHECKSUM}/${TOKEN_ID}`;
export const ASSET_ID_PARAMS: AssetIdParams = {
  chainId: CHAIN_ID_STRING,
  assetName: ASSET_NAME_STRING,
  tokenId: TOKEN_ID,
};

export const ASSET_ID_PARAMS_CHECKSUM: AssetIdParams = {
  chainId: CHAIN_ID_STRING,
  assetName: ASSET_NAME_STRING_CHECKSUM,
  tokenId: TOKEN_ID,
};

export const ASSET_ID_NESTED_PARAMS: AssetIdParams = {
  chainId: CHAIN_ID_PARAMS,
  assetName: ASSET_NAME_PARAMS,
  tokenId: TOKEN_ID,
};

export const ASSET_ID_NESTED_PARAMS_CHECKSUM: AssetIdParams = {
  chainId: CHAIN_ID_PARAMS,
  assetName: ASSET_NAME_PARAMS_CHECKSUM,
  tokenId: TOKEN_ID,
};
