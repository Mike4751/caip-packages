# caip-hedera [![npm version](https://badge.fury.io/js/caip.svg)](https://badge.fury.io/js/caip)

CAIP-Hedera standard utils

## ChainId (CAIP-2)

### Object-oriented

```typescript
import { Hedera } from "caip-hedera";

const ChainId = new Hedera("hedera:mainnet");

// OR

const ChainId = new Hedera({ namespace: "hedera", reference: "mainnet" });

// THEN

ChainId.toString();
// "hedera:mainnet"

ChainId.toJSON();
// { namespace: "hedera", reference: "mainnet" }
```

### Functional

```typescript
import { Hedera } from "caip-hedera";

Hedera.parse("hedera:mainnet");
// { namespace: "hedera", reference: "mainnet" }

// AND

Hedera.format({ namespace: "hedera", reference: "mainnet" });
// "hedera:mainnet"
```

## AccountId (CAIP-10)

### Object-oriented

```typescript
import { Hedera } from "caip-hedera";

const accountId = new Hedera("hedera:mainnet:0.0.55492");

// OR

const accountId = new Hedera({
  chainId: { namespace: "hedera", reference: "mainnet" },
  address: "0.0.55492",
});

// ALSO

const accountId = new Hedera({
  chainId: "hedera:mainnet",
  address: "0.0.55492",
});

// THEN

accountId.toString();
// "hedera:mainnet:0.0.55492"

accountId.toJSON();
// {
//   address: "0.0.55492",
//   chainId: { namespace: "hedera", reference: "mainnet" }
// }
```

### Functional

```typescript
import { Hedera } from "caip-hedera";

Hedera.parse("hedera:mainnet:0.0.55492");
// { address: "0.0.55492", chainId: { namespace: "hedera", reference: "mainnet" } }

// AND

Hedera.format({
  chainId: { namespace: "hedera", reference: "mainnet" },
  address: "0.0.55492",
});
// "hedera:mainnet:0.0.55492"

// OR

Hedera.format({
  chainId: "hedera:mainnet",
  address: "0.0.55492",
});
// "hedera:mainnet:0.0.55492"
```

## AssetId (CAIP-19)

### Object-oriented

```typescript
import { Hedera } from "caip-hedera";

const assetId = new Hedera("hedera:mainnet/nft:0.0.55492/12");

// OR

const assetId = new Hedera({
  chainId: { namespace: "hedera", reference: "mainnet" },
  assetName: {
    namespace: "nft",
    reference: "0.0.55492",
  },
  tokenId: "12",
});

// ALSO

const assetId = new Hedera({
  chainId: "hedera:mainnet",
  assetName: "nft:0.0.55492",
  tokenId: "12",
});

// THEN

assetId.toString();
// "hedera:mainnet/nft:0.0.55492/12"

assetId.toJSON();
// {
//    chainId: { namespace: "hedera", reference: "mainnet" },
//    assetName: { namespace: "nft", reference: "0.0.55492" },
//    tokenId: "12",
// }
```

### Functional

```typescript
import { Hedera } from "caip-hedera";

Hedera.parse("hedera:mainnet/nft:0.0.55492/12");
// {
//    chainId: { namespace: "hedera", reference: "mainnet" },
//    assetName: { namespace: "nft", reference: "0.0.55492" },
//    tokenId: "12",
// }

// AND

Hedera.format({
  chainId: { namespace: "hedera", reference: "mainnet" },
  assetName: {
    namespace: "nft",
    reference: "0.0.55492",
  },
  tokenId: "12",
});
// "hedera:mainnet/nft:0.0.55492/12"

// OR

Hedera.format({
  chainId: "hedera:mainnet",
  assetName: "nft:0.0.55492",
  tokenId: "12",
});
// "hedera:mainnet/nft:0.0.55492/12"
```

## AssetType (CAIP-19)

### Object-oriented

```typescript
import { Hedera } from "caip-hedera";

const assetType = new Hedera("hedera:mainnet/nft:0.0.55492");

// OR

const assetType = new Hedera({
  chainId: { namespace: "hedera", reference: "mainnet" },
  assetName: {
    namespace: "nft",
    reference: "0.0.55492",
  },
});

// ALSO

const assetType = new Hedera({
  chainId: "hedera:mainnet",
  assetName: "nft:0.0.55492",
});

// THEN

assetType.toString();
// "hedera:mainnet/nft:0.0.55492"

assetType.toJSON();
// {
//   chainId: { namespace: "hedera", reference: "mainnet" },
//   assetName: {
//     namespace: "nft",
//     reference: "0.0.55492",
//   },
// }
```

### Functional

```typescript
import { Hedera } from "caip-hedera";

Hedera.parse("hedera:mainnet/nft:0.0.55492");
// {
//   chainId: { namespace: "hedera", reference: "mainnet" },
//   assetName: { namespace: "nft", reference: "0.0.55492" },
// }

// AND

AssetType.format({
  chainId: { namespace: "hedera", reference: "mainnet" },
  assetName: {
    namespace: "nft",
    reference: "0.0.55492",
  },
});
// "hedera:mainnet/nft:0.0.55492"

// OR

AssetType.format({
  chainId: "hedera:mainnet",
  assetName: "nft:0.0.55492",
});
// "hedera:mainnet/nft:0.0.55492"
```
