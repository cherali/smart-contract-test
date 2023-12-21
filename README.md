# Smart Contract Test
This app is simple app for interacting with ERC20.

## Build With:
+ Vite
+ React
+ Wagmi
+ Typescript
+ Tailwind CSS
+ Zustand
+ React-hook-form
+ Yup \
and Eslint + Prettier

## Note That
- I used minimal config for entire app (including Vite, tailwind, zustand, ...) ignoring all production optimization (even code splitting).
- Using Vite with pnpm for better experience, and left pnpm-lock.yaml in source code (feel free to use others).
- Show Error at the bottom of form.
- Using tailwind for UI.
- I kept UI as simple as possible.
- Responsive with dark theme(only).
- Only MetaMask wallet implemented.
- Hard coded texts!
- No Error boundary wrapper provided.
- No polyfill.
- No routing.

## Good To Know
+ Solidity uses uint256 for variables and represented by `2^256 - 1` but JavaScript uses BigInt `2^53 - 1`.
+ In wagmi.config.ts you can find `MintableERC20` smart contract address that exist in goerli test network.
+ To interacting with ERC20 you need a Ethereum wallet, in this project only MetaMask wallet implemented.
+ To mint and transaction you need goerli eth to supply the gas, so after creating wallet you need to add some goerli eth, for this part you can use any faucet site that gave you free goerli eth.
+ If you need to add another browser base wallet like coinbase you can add config to `createConfig` method in connector section in `wagmiProvider` {see provider folder in source code} file, for example this following code add coinbase wallet (this is NOT needed because we dealing with Eth network).
```typescript
  new CoinbaseWalletConnector({
    chains,
    options: {
      appName: 'wagmi',
    },
  }),
```
+ Purpose of the app is just for testing, so `mainnet` isn't included.
+ wagmi cli generate hooks for you based on name and abis given to the config, it's customizable but I preferred to use contract name for generated hooks this not looks so good but avoid conflict and make the code easier to read (hooks generated on each build also on re-run app and can be found in hooks folder).
+ I kept form validation as simple as possible but its easy to add more validation (like disable submit button after submitting the form but form contains invalid fields {client side})
+ For address validation I use `isAddress` method from `viem` and this method check whether the address format is correct or not, this method doesn't check the integrity of address.
+ If minting return with success status the app jumps to transfer form, if failed showing alert message at the bottom of from, in transfer form if transaction success app jumps to success section but if its fail error messages rendered at bottom of form.
+ for mint value only positive and integer is valid (0 is an invalid value).
+ For minting app waits for block confirmation so that may take a while to return confirmed and transaction form rendered on the page.
+ After confirming transaction in MetaMask wallet the app show success transfer section, but transaction still need block confirmation to be completed, by using `useWaitForTransaction` can wait for connection result but in real network confirmation may take couple of minutes so this not recommended.

## Preview
This app is available on vercel for testing. [visit](https://smart-contract-test-alpha.vercel.app/)

## Install Packages
npm:
```bash
npm i
```

yarn:
```bash
yarn
```

pnpm:
```bash
pnpm i
```

## Run - Development
npm:
```bash
npm run dev
```

pnpm:
```bash
pnpm dev
```

## Run - Production
npm:
```bash
npm run build
```
then run:
```bash
npm run preview
```

<hr />

pnpm:
```bash
pnpm build
```
then run:
```bash
pnpm preview
```