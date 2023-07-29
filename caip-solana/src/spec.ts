import { IdentifierSpec } from "./types";

const CAIP2: IdentifierSpec = {
  name: "chainId",
  regex: "solana:[-_a-zA-Z0-9]{31,32}",
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "namespace",
        regex: "solana",
      },
      1: {
        name: "reference",
        regex: "[-_a-zA-Z0-9]{31,32}",
      },
    },
  },
};

const CAIP10: IdentifierSpec = {
  name: "accountId",
  regex: "solana:[-_a-zA-Z0-9]{31,32}:[1-9A-HJ-NP-Za-km-z]{32,44}",
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "namespace",
        regex: "solana",
      },
      1: {
        name: "reference",
        regex: "[-a-zA-Z0-9]{31,32}",
      },
      2: {
        name: "address",
        regex: "[1-9A-HJ-NP-Za-km-z]{32,44}",
      },
    },
  },
};

// represents namespace:reference in CAIP-19
const AssetName: IdentifierSpec = {
  name: "assetName",
  regex: "[-a-zA-Z]{3,5}:[1-9A-HJ-NP-Za-km-z]{32,44}",
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "namespace",
        regex: "[-a-zA-Z]{3,5}",
      },
      1: {
        name: "reference",
        regex: "[1-9A-HJ-NP-Za-km-z]{32,44}",
      },
    },
  },
};

const CAIP19_AssetType: IdentifierSpec = {
  name: "assetType",
  regex:
    "solana:[-a-zA-Z0-9]{31,32}/[-a-zA-Z]{3,5}:[1-9A-HJ-NP-Za-km-z]{32,44}",
  parameters: {
    delimiter: "/",
    values: {
      0: CAIP2,
      1: AssetName,
    },
  },
};

const CAIP19_AssetId: IdentifierSpec = {
  name: "assetType",
  regex:
    "solana:[-a-zA-Z0-9]{31,32}/[-a-zA-Z]{3,5}:[1-9A-HJ-NP-Za-km-z]{32,44}",
  parameters: {
    delimiter: "/",
    values: {
      0: CAIP2,
      1: AssetName,
    },
  },
};

export const Specs = [
  CAIP2,
  CAIP10,
  AssetName,
  CAIP19_AssetType,
  CAIP19_AssetId,
];
