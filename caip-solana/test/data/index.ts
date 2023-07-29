import { AssetIdParams, AssetTypeParams } from "caip/dist";
import { AssetNameParams } from "../../src/assetName";

// ChainId Data Points
export const CHAIN_ID_DELIMITER = ":";
export const CHAIN_ID_NAMESPACE = "solana";
export const CHAIN_ID_REFERENCE = "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp";
export const CHAIN_ID_STRING =
  CHAIN_ID_NAMESPACE + CHAIN_ID_DELIMITER + CHAIN_ID_REFERENCE;
export const CHAIN_ID_PARAMS = {
  namespace: CHAIN_ID_NAMESPACE,
  reference: CHAIN_ID_REFERENCE,
};

// AccountId Data Points
export const ACCOUNT_ID_DELIMITER = ":";
export const ACCOUNT_ID_ADDRESS =
  "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
export const ACCOUNT_ID_STRING =
  CHAIN_ID_STRING + ACCOUNT_ID_DELIMITER + ACCOUNT_ID_ADDRESS;
export const ACCOUNT_ID_PARAMS = {
  chainId: CHAIN_ID_STRING,
  address: ACCOUNT_ID_ADDRESS,
};

export const ACCOUNT_ID_NESTED_PARAMS = {
  chainId: CHAIN_ID_PARAMS,
  address: ACCOUNT_ID_ADDRESS,
};

// AssetName Data Points
export const ASSET_NAME_DELIMITER = ":";
export const ASSET_NAMESPACE = "token";
export const ASSET_REFERENCE = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
export const ASSET_NAME_STRING = `${ASSET_NAMESPACE}${ASSET_NAME_DELIMITER}${ASSET_REFERENCE}`;
export const ASSET_NAME_PARAMS: AssetNameParams = {
  namespace: ASSET_NAMESPACE,
  reference: ASSET_REFERENCE,
};

// AssetType Data Points
export const ASSET_TYPE_STRING = `${CHAIN_ID_STRING}/${ASSET_NAME_STRING}`;
export const ASSET_TYPE_PARAMS: AssetTypeParams = {
  chainId: CHAIN_ID_STRING,
  assetName: ASSET_NAME_STRING,
};

export const ASSET_TYPE_NESTED_PARAMS: AssetTypeParams = {
  chainId: CHAIN_ID_PARAMS,
  assetName: ASSET_NAME_PARAMS,
};

// AssetId Data Points
export const ASSET_ID_STRING = ASSET_TYPE_STRING;
export const ASSET_ID_PARAMS = ASSET_TYPE_PARAMS;

export const ASSET_ID_NESTED_PARAMS = ASSET_TYPE_NESTED_PARAMS;
