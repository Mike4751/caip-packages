import { Hedera } from "../src";

import * as data from "./data";

function assertHederaInterface(result: Hedera) {
  expect(result.namespace).toEqual(data.CHAIN_ID_NAMESPACE);
  expect(result.reference).toEqual(data.CHAIN_ID_REFERENCE);
  expect(result.toString()).toEqual(data.CHAIN_ID_STRING);
  expect(result.toJSON()).toEqual(data.CHAIN_ID_PARAMS);
}

describe("Hedera Hedera", () => {
  it("should parse string", async () => {
    const result = Hedera.parse(data.CHAIN_ID_STRING);
    expect(result).toEqual(data.CHAIN_ID_PARAMS);
  });

  it("should format params", async () => {
    const result = Hedera.format(data.CHAIN_ID_PARAMS);
    expect(result).toEqual(data.CHAIN_ID_STRING);
  });

  it("should instantiate from json", async () => {
    const result = new Hedera(data.CHAIN_ID_PARAMS);
    assertHederaInterface(result);
  });

  it("should instantiate from string", async () => {
    const result = new Hedera(data.CHAIN_ID_STRING);
    assertHederaInterface(result);
  });

  it("should support JSON.stringify", async () => {
    const result = new Hedera(data.CHAIN_ID_STRING);
    const str = JSON.stringify(result);
    const json = JSON.parse(str);
    assertHederaInterface(new Hedera(json));
  });
});
