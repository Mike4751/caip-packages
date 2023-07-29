import { IdentifierSpec } from "./types";

const CAIP2: IdentifierSpec = {
  name: "chainId",
  regex: "hedera:[-a-zA-Z0-9]{5,32}",
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "namespace",
        regex: "hedera",
      },
      1: {
        name: "reference",
        regex: "[-a-zA-Z0-9]{5,32}",
      },
    },
  },
};

const CAIP10: IdentifierSpec = {
  name: "accountId",
  regex:
    "hedera:[-a-zA-Z0-9]{5,32}:[0-9]{1,19}.[0-9]{1,19}.[0-9]{1,19}(-[a-z]{5}){0,1}",
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "namespace",
        regex: "hedera",
      },
      1: {
        name: "reference",
        regex: "[-a-zA-Z0-9]{5,32}",
      },
      2: {
        name: "address",
        regex: "[0-9]{1,19}.[0-9]{1,19}.[0-9]{1,19}(-[a-z]{5}){0,1}",
      },
    },
  },
};

// represents namespace:reference in CAIP-19
const AssetName: IdentifierSpec = {
  name: "assetName",
  regex: "[-a-zA-Z]{3,5}:[0-9]{1,19}.[0-9]{1,19}.[0-9]{1,19}(-[a-z]{5}){0,1}",
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "namespace",
        regex: "[-a-zA-Z]{3,5}",
      },
      1: {
        name: "reference",
        regex: "[0-9]{1,19}.[0-9]{1,19}.[0-9]{1,19}(-[a-z]{5}){0,1}",
      },
    },
  },
};

const CAIP19_AssetType: IdentifierSpec = {
  name: "assetType",
  regex:
    "hedera:[-a-zA-Z0-9]{5,32}/[-a-zA-Z]{3,5}:[0-9]{1,19}.[0-9]{1,19}.[0-9]{1,19}(-[a-z]{5}){0,1}",
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
    "hedera:[-a-zA-Z0-9]{5,32}/[-a-zA-Z]{3,5}:[0-9]{1,19}.[0-9]{1,19}.[0-9]{1,19}(-[a-z]{5}){0,1}/[0-9]{1,19}",
  parameters: {
    delimiter: "/",
    values: {
      0: CAIP2,
      1: AssetName,
      2: {
        name: "tokenId",
        regex: "[0-9]{1,19}",
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
