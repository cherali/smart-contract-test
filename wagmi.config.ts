import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import * as chains from 'wagmi/chains'

import { mintableERC20 } from './abis/mintableERC20'

export default defineConfig(() => {
  return {
    out: 'src/hooks/contractHooks.ts',
    contracts: [
      {
        abi: mintableERC20,
        name: 'MintableERC20',
        address: {
          [chains.mainnet.id]: '0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd',
          [chains.goerli.id]: '0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd',
        },
      },
    ],
    plugins: [react()],
  }
})
