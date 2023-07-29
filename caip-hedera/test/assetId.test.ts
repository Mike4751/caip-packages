import { Hedera } from "../src";

import * as data from "./data";

function assertInterface(result: Hedera) {
  expect(result.chainId?.toString()).toEqual(data.CHAIN_ID_STRING);
  expect(result.assetName?.toString()).toEqual(data.ASSET_NAME_STRING);
  expect(result.tokenId).toEqual(data.TOKEN_ID);
  expect(result.toString()).toEqual(data.ASSET_ID_STRING);
  expect(result.toJSON()).toEqual(data.ASSET_ID_NESTED_PARAMS);
}

describe("Hedera AssetId", () => {
  it("should parse string", async () => {
    const result = Hedera.parse(data.ASSET_ID_STRING);
    expect(result).toEqual(data.ASSET_ID_NESTED_PARAMS);
  });

  it("should format params", async () => {
    const result = Hedera.format(data.ASSET_ID_PARAMS);
    expect(result).toEqual(data.ASSET_ID_STRING);
  });

  it("should instantiate from params", async () => {
    const result = new Hedera(data.ASSET_ID_PARAMS);
    assertInterface(result);
  });

  it("should instantiate from string", async () => {
    const result = new Hedera(data.ASSET_ID_STRING);
    assertInterface(result);
  });

  it("should instantiate from nested params", async () => {
    const result = new Hedera(data.ASSET_ID_NESTED_PARAMS);
    assertInterface(result);
  });

  it("should support JSON.stringify", async () => {
    const result = new Hedera(data.ASSET_ID_PARAMS);
    const str = JSON.stringify(result);
    const json = JSON.parse(str);
    assertInterface(new Hedera(json));
  });
});
