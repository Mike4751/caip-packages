import { IdentifierSpec } from "./types";

const CAIP2: IdentifierSpec = {
  name: "chainId",
  regex: "[-a-z0-9]{3,8}:[-_a-zA-Z0-9]{1,32}",
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "namespace",
        regex: "[-a-z0-9]{3,8}",
      },
      1: {
        name: "reference",
        regex: "[-_a-zA-Z0-9]{1,32}",
      },
    },
  },
};

const CAIP10: IdentifierSpec = {
  name: "accountId",
  regex: "[-a-z0-9]{3,8}:[-_a-zA-Z0-9]{1,32}:0x[a-fA-F0-9]{40}",
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "namespace",
        regex: "[-a-z0-9]{3,8}",
      },
      1: {
        name: "reference",
        regex: "[-a-zA-Z0-9]{1,32}",
      },
      2: {
        name: "address",
        regex: "0x[a-fA-F0-9]{40}",
      },
    },
  },
};

// represents namespace:reference in CAIP-19
const AssetName: IdentifierSpec = {
  name: "assetName",
  regex: "erc[a-z0-9]{2,5}:0x[a-fA-F0-9]{40}",
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "namespace",
        regex: "erc[a-z0-9]{2,5}",
      },
      1: {
        name: "reference",
        regex: "0x[a-fA-F0-9]{40}",
      },
    },
  },
};

const CAIP19_AssetType: IdentifierSpec = {
  name: "assetType",
  regex:
    "[-a-z0-9]{3,8}:[-_a-zA-Z0-9]{1,32}/erc[a-z0-9]{2,5}:0x[a-fA-F0-9]{40}",
  parameters: {
    delimiter: "/",
    values: {
      0: CAIP2,
      1: AssetName,
    },
  },
};

const CAIP19_AssetId: IdentifierSpec = {
  name: "assetId",
  regex:
    "[-a-z0-9]{3,8}:[-_a-zA-Z0-9]{1,32}/erc[a-z0-9]{2,5}:0x[a-fA-F0-9]{40}/[0-9]{1,78}",
  parameters: {
    delimiter: "/",
    values: {
      0: CAIP2,
      1: AssetName,
      2: {
        name: "tokenId",
        regex: "[0-9]{1,78}",
      },
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
