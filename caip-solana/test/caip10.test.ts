import { Solana } from "../src";

import * as data from "./data";

function assertSolanaInterface(result: Solana) {
  expect(result.chainId?.toString()).toEqual(data.CHAIN_ID_STRING);
  expect(result.address).toEqual(data.ACCOUNT_ID_ADDRESS);
  expect(result.toString()).toEqual(data.ACCOUNT_ID_STRING);
  expect(result.toJSON()).toEqual(data.ACCOUNT_ID_NESTED_PARAMS);
}

describe("Solana Solana", () => {
  it("should parse string", async () => {
    const result = Solana.parse(data.ACCOUNT_ID_STRING);
    expect(result).toEqual(data.ACCOUNT_ID_NESTED_PARAMS);
  });

  it("should format params", async () => {
    const result = Solana.format(data.ACCOUNT_ID_PARAMS);
    expect(result).toEqual(data.ACCOUNT_ID_STRING);
  });

  it("should instantiate from params", async () => {
    const result = new Solana(data.ACCOUNT_ID_PARAMS);
    assertSolanaInterface(result);
  });

  it("should instantiate from string", async () => {
    const result = new Solana(data.ACCOUNT_ID_STRING);
    assertSolanaInterface(result);
  });

  it("should instantiate from nested params", async () => {
    const result = new Solana(data.ACCOUNT_ID_NESTED_PARAMS);
    assertSolanaInterface(result);
  });

  it("should support JSON.stringify", async () => {
    const result = new Solana(data.ACCOUNT_ID_PARAMS);
    const str = JSON.stringify(result);
    const json = JSON.parse(str);
    assertSolanaInterface(new Solana(json));
  });
});
