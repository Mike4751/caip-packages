# caip

This repo contains specific Chain Agnostic Namespace utils. Please see individual package README for usage.

## Contribute a new Namespace Package

### Clone this repo

```git
git clone https://github.com/Mike4751/caip-packages.git
```

### Add a new directory

```
Add a new directory in the root for the specific Namespace.
For example "caip-eip155", "caip-hedera", "caip-solana"
```

### Copy files from any existing directory

```
This example uses caip-eip155

Files to be copied
  > src
    - assetName.ts
    - eip155.ts
    - index.ts
    - spec.ts
    - types.ts
    - utils.ts
  > test
    > data
      - index.ts
    - assetId.test.ts
    - assetType.test.ts
    - caip2.test.ts
    - caip10.test.ts
  - jest.config.js
  - .gitignore
  - package.json
  - README.md
  - tsconfig.json
```

### cd into the new directory and install node_modules

```
cd new-directory
yarn install
```

### Replace old Namespace with new one (EIP155 -> Hedera)

```
Find and Replace EIP155 with Hedera in the following files:
  - src/eip155.ts
  - test/assetId.test.ts
  - test/assetType.test.ts
  - test/caip2.test.ts
  - test/caip10.test.ts

eip155.ts needs to be renamed to hedera.ts.

The export in src/index.ts needs to be changed from "./eip155" to "./hedera".

Replace the regex values with the new Namespace's regex values in the src/spec.ts file:
    *** Depending on the Namespace delimiters might need to be changed as well ***

  - CAIP2.regex
  - CAIP2.parameters.value[0].regex
  - CAIP2.parameters.value[1].regex

  - CAIP10.regex
  - CAIP10.parameters.value[0].regex
  - CAIP10.parameters.value[1].regex
  - CAIP10.parameters.value[2].regex

  - AssetName.regex
  - AssetName.parameters.value[0].regex
  - AssetName.parameters.value[1].regex

  - CAIP19_AssetType.regex

  - CAIP19_AssetId.regex
  - CAIP19_AssetId.parameters.values[2].regex

Replace test values in test/data/index.ts with new Namespace specific values.

```

### Test to ensure correct functionality

```
yarn test
```

### Prepare package for publishing

```
yarn prepare
```

### Submit a PR to the root directory (caip-packages)
