import { Solana } from "../src";

import * as data from "./data";

function assertSolanaInterface(result: Solana) {
  expect(result.namespace).toEqual(data.CHAIN_ID_NAMESPACE);
  expect(result.reference).toEqual(data.CHAIN_ID_REFERENCE);
  expect(result.toString()).toEqual(data.CHAIN_ID_STRING);
  expect(result.toJSON()).toEqual(data.CHAIN_ID_PARAMS);
}

describe("Solana Solana", () => {
  it("should parse string", async () => {
    const result = Solana.parse(data.CHAIN_ID_STRING);
    expect(result).toEqual(data.CHAIN_ID_PARAMS);
  });

  it("should format params", async () => {
    const result = Solana.format(data.CHAIN_ID_PARAMS);
    expect(result).toEqual(data.CHAIN_ID_STRING);
  });

  it("should instantiate from json", async () => {
    const result = new Solana(data.CHAIN_ID_PARAMS);
    assertSolanaInterface(result);
  });

  it("should instantiate from string", async () => {
    const result = new Solana(data.CHAIN_ID_STRING);
    assertSolanaInterface(result);
  });

  it("should support JSON.stringify", async () => {
    const result = new Solana(data.CHAIN_ID_STRING);
    const str = JSON.stringify(result);
    const json = JSON.parse(str);
    assertSolanaInterface(new Solana(json));
  });
});
