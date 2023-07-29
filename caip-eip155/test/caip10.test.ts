import { EIP155 } from "../src";

import * as data from "./data";

function assertEIP155Interface(result: EIP155) {
  expect(result.chainId?.toString()).toEqual(data.CHAIN_ID_STRING);
  expect(result.address).toEqual(data.ACCOUNT_ID_ADDRESS);
  expect(result.toString()).toEqual(data.ACCOUNT_ID_STRING);
  expect(result.toJSON()).toEqual(data.ACCOUNT_ID_NESTED_PARAMS);
}

describe("EIP155 EIP155", () => {
  it("should parse string", async () => {
    const result = EIP155.parse(data.ACCOUNT_ID_STRING);
    expect(result).toEqual(data.ACCOUNT_ID_NESTED_PARAMS);
  });

  it("should format params", async () => {
    const result = EIP155.format(data.ACCOUNT_ID_PARAMS);
    expect(result).toEqual(data.ACCOUNT_ID_STRING);
  });

  it("should instantiate from params", async () => {
    const result = new EIP155(data.ACCOUNT_ID_PARAMS);
    assertEIP155Interface(result);
  });

  it("should instantiate from string", async () => {
    const result = new EIP155(data.ACCOUNT_ID_STRING);
    assertEIP155Interface(result);
  });

  it("should instantiate from nested params", async () => {
    const result = new EIP155(data.ACCOUNT_ID_NESTED_PARAMS);
    assertEIP155Interface(result);
  });

  it("should support JSON.stringify", async () => {
    const result = new EIP155(data.ACCOUNT_ID_PARAMS);
    const str = JSON.stringify(result);
    const json = JSON.parse(str);
    assertEIP155Interface(new EIP155(json));
  });
});
