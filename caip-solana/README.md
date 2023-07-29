# caip-solana [![npm version](https://badge.fury.io/js/caip.svg)](https://badge.fury.io/js/caip)

CAIP-Solana standard utils

## ChainId (CAIP-2)

### Object-oriented

```typescript
import { Solana } from "caip-solana";

const ChainId = new Solana("solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp");

// OR

const ChainId = new Solana({
  namespace: "solana",
  reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
});

// THEN

ChainId.toString();
// "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp"

ChainId.toJSON();
// { namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" }
```

### Functional

```typescript
import { Solana } from "caip-solana";

Solana.parse("solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp");
// { namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" }

// AND

Solana.format({
  namespace: "solana",
  reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
});
// "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp"
```

## AccountId (CAIP-10)

### Object-oriented

```typescript
import { Solana } from "caip-solana";

const accountId = new Solana(
  "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp:EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
);

// OR

const accountId = new Solana({
  chainId: {
    namespace: "solana",
    reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  },
  address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
});

// ALSO

const accountId = new Solana({
  chainId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
});

// THEN

accountId.toString();
// "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp:EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"

accountId.toJSON();
// {
//   address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
//   chainId: { namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" }
// }
```

### Functional

```typescript
import { Solana } from "caip-solana";

Solana.parse(
  "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp:EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
);
// {
//   address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
//   chainId: { namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" }
// }

// AND

Solana.format({
  chainId: {
    namespace: "solana",
    reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  },
  address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
});
// "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp:EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"

// OR

Solana.format({
  chainId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
});
// "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp:EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
```

## AssetId (CAIP-19)

### Object-oriented

```typescript
import { Solana } from "caip-solana";

const assetId = new Solana(
  "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp/token:EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
);

// OR

const assetId = new Solana({
  chainId: {
    namespace: "solana",
    reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  },
  assetName: {
    namespace: "token",
    reference: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  },
});

// ALSO

const assetId = new Solana({
  chainId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  assetName: "token:EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
});

// THEN

assetId.toString();
// "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp/token:EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"

assetId.toJSON();
// {
//    chainId: { namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" },
//    assetName: { namespace: "token", reference: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" },
// }
```

### Functional

```typescript
import { Solana } from "caip-solana";

Solana.parse(
  "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp/token:EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
);
// {
//    chainId: { namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" },
//    assetName: { namespace: "token", reference: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" },
// }

// AND

Solana.format({
  chainId: {
    namespace: "solana",
    reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  },
  assetName: {
    namespace: "token",
    reference: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  },
});
// "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp/token:EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"

// OR

Solana.format({
  chainId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  assetName: "token:EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
});
// "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp/token:EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
```

## AssetType (CAIP-19)

### Object-oriented

```typescript
import { Solana } from "caip-solana";

const assetType = new Solana(
  "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp/token:EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
);

// OR

const assetType = new Solana({
  chainId: {
    namespace: "solana",
    reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  },
  assetName: {
    namespace: "token",
    reference: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  },
});

// ALSO

const assetType = new Solana({
  chainId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  assetName: "token:EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
});

// THEN

assetType.toString();
// "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp/token:EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"

assetType.toJSON();
// {
//   chainId: { namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" },
//   assetName: {
//     namespace: "token",
//     reference: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
//   },
// }
```

### Functional

```typescript
import { Solana } from "caip-solana";

Solana.parse(
  "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp/token:EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
);
// {
//   chainId: { namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" },
//   assetName: { namespace: "token", reference: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" },
// }

// AND

AssetType.format({
  chainId: {
    namespace: "solana",
    reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  },
  assetName: {
    namespace: "token",
    reference: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  },
});
// "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp/token:EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"

// OR

AssetType.format({
  chainId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  assetName: "token:EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
});
// "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp/token:EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
```
