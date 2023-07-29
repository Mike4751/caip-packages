import { EIP155 } from "../src";

import * as data from "./data";

function assertEIP155Interface(result: EIP155) {
  expect(result.namespace).toEqual(data.CHAIN_ID_NAMESPACE);
  expect(result.reference).toEqual(data.CHAIN_ID_REFERENCE);
  expect(result.toString()).toEqual(data.CHAIN_ID_STRING);
  expect(result.toJSON()).toEqual(data.CHAIN_ID_PARAMS);
}

describe("EIP155 EIP155", () => {
  it("should parse string", async () => {
    const result = EIP155.parse(data.CHAIN_ID_STRING);
    expect(result).toEqual(data.CHAIN_ID_PARAMS);
  });

  it("should format params", async () => {
    const result = EIP155.format(data.CHAIN_ID_PARAMS);
    expect(result).toEqual(data.CHAIN_ID_STRING);
  });

  it("should instantiate from json", async () => {
    const result = new EIP155(data.CHAIN_ID_PARAMS);
    assertEIP155Interface(result);
  });

  it("should instantiate from string", async () => {
    const result = new EIP155(data.CHAIN_ID_STRING);
    assertEIP155Interface(result);
  });

  it("should support JSON.stringify", async () => {
    const result = new EIP155(data.CHAIN_ID_STRING);
    const str = JSON.stringify(result);
    const json = JSON.parse(str);
    assertEIP155Interface(new EIP155(json));
  });
});
