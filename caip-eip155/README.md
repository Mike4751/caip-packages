# caip-eip155 [![npm version](https://badge.fury.io/js/caip.svg)](https://badge.fury.io/js/caip)

CAIP-EIP155 standard utils

## ChainId (CAIP-2)

### Object-oriented

```typescript
import { EIP155 } from "caip-eip155";

const ChainId = new EIP155("eip155:1");

// OR

const ChainId = new EIP155({ namespace: "eip155", reference: "1" });

// THEN

ChainId.toString();
// "eip155:1"

ChainId.toJSON();
// { namespace: "eip155", reference: "1" }
```

### Functional

```typescript
import { EIP155 } from "caip-eip155";

EIP155.parse("eip155:1");
// { namespace: "eip155", reference: "1" }

// AND

EIP155.format({ namespace: "eip155", reference: "1" });
// "eip155:1"
```

## AccountId (CAIP-10)

### Object-oriented

```typescript
import { EIP155 } from "caip-eip155";

const accountId = new EIP155(
  "eip155:1:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb"
);

// OR

const accountId = new EIP155({
  chainId: { namespace: "eip155", reference: "1" },
  address: "0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb",
});

// ALSO

const accountId = new EIP155({
  chainId: "eip155:1",
  address: "0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb",
});

// THEN

accountId.toString();
// "eip155:1:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb"

accountId.toJSON();
// {
//   address: "0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb",
//   chainId: { namespace: "eip155", reference: "1" }
// }
```

### Functional

```typescript
import { EIP155 } from "caip-eip155";

EIP155.parse("eip155:1:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb");
// { address: "0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb", chainId: { namespace: "eip155", reference: "1" } }

// AND

EIP155.format({
  chainId: { namespace: "eip155", reference: "1" },
  address: "0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb",
});
// "eip155:1:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb"

// OR

EIP155.format({
  chainId: "eip155:1",
  address: "0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb",
});
// "eip155:1:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb"
```

## AssetId (CAIP-19)

### Object-oriented

```typescript
import { EIP155 } from "caip-eip155";

const assetId = new EIP155(
  "eip155:1/erc721:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb/1"
);

// OR

const assetId = new EIP155({
  chainId: { namespace: "eip155", reference: "1" },
  assetName: {
    namespace: "erc721",
    reference: "0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb",
  },
  tokenId: "1",
});

// ALSO

const assetId = new EIP155({
  chainId: "eip155:1",
  assetName: "erc721:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb",
  tokenId: "1",
});

// THEN

assetId.toString();
// "eip155:1/erc721:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb/1"

assetId.toJSON();
// {
//    chainId: { namespace: "eip155", reference: "1" },
//    assetName: { namespace: "erc721", reference: "0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb" },
//    tokenId: "1",
// }
```

### Functional

```typescript
import { EIP155 } from "caip-eip155";

EIP155.parse("eip155:1/erc721:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb/1");
// {
//    chainId: { namespace: "eip155", reference: "1" },
//    assetName: { namespace: "erc721", reference: "0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb" },
//    tokenId: "1",
// }

// AND

EIP155.format({
  chainId: { namespace: "eip155", reference: "1" },
  assetName: {
    namespace: "erc721",
    reference: "0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb",
  },
  tokenId: "1",
});
// "eip155:1/erc721:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb/1"

// OR

EIP155.format({
  chainId: "eip155:1",
  assetName: "erc721:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb",
  tokenId: "1",
});
// "eip155:1/erc721:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb/1"
```

## AssetType (CAIP-19)

### Object-oriented

```typescript
import { EIP155 } from "caip-eip155";

const assetType = new EIP155(
  "eip155:1/erc721:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb"
);

// OR

const assetType = new EIP155({
  chainId: { namespace: "eip155", reference: "1" },
  assetName: {
    namespace: "erc721",
    reference: "0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb",
  },
});

// ALSO

const assetType = new EIP155({
  chainId: "eip155:1",
  assetName: "erc721:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb",
});

// THEN

assetType.toString();
// "eip155:1/erc721:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb"

assetType.toJSON();
// {
//   chainId: { namespace: "eip155", reference: "1" },
//   assetName: {
//     namespace: "erc721",
//     reference: "0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb",
//   },
// }
```

### Functional

```typescript
import { EIP155 } from "caip-eip155";

EIP155.parse("eip155:1/erc721:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb");
// {
//   chainId: { namespace: "eip155", reference: "1" },
//   assetName: { namespace: "erc721", reference: "0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb" },
// }

// AND

AssetType.format({
  chainId: { namespace: "eip155", reference: "1" },
  assetName: {
    namespace: "erc721",
    reference: "0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb",
  },
});
// "eip155:1/erc721:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb"

// OR

AssetType.format({
  chainId: "eip155:1",
  assetName: "erc721:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb",
});
// "eip155:1/erc721:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb"
```
