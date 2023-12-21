import {
  useNetwork,
  useChainId,
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  Address,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from 'wagmi'
import { ReadContractResult, WriteContractMode, PrepareWriteContractResult } from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MintableERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export const mintableErc20ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
      { name: 'decimals', internalType: 'uint8', type: 'uint8' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'spender', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'mint',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export const mintableErc20Address = {
  1: '0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd',
  5: '0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export const mintableErc20Config = { address: mintableErc20Address, abi: mintableErc20ABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mintableErc20ABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function useMintableErc20Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof mintableErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mintableErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > & { chainId?: keyof typeof mintableErc20Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    ...config,
  } as UseContractReadConfig<typeof mintableErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mintableErc20ABI}__ and `functionName` set to `"allowance"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function useMintableErc20Allowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof mintableErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mintableErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mintableErc20Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<typeof mintableErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mintableErc20ABI}__ and `functionName` set to `"balanceOf"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function useMintableErc20BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof mintableErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mintableErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mintableErc20Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof mintableErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mintableErc20ABI}__ and `functionName` set to `"decimals"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function useMintableErc20Decimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof mintableErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mintableErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mintableErc20Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<typeof mintableErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mintableErc20ABI}__ and `functionName` set to `"name"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function useMintableErc20Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof mintableErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mintableErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mintableErc20Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof mintableErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mintableErc20ABI}__ and `functionName` set to `"symbol"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function useMintableErc20Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof mintableErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mintableErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mintableErc20Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof mintableErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mintableErc20ABI}__ and `functionName` set to `"totalSupply"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function useMintableErc20TotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof mintableErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mintableErc20ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mintableErc20Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof mintableErc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mintableErc20ABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function useMintableErc20Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mintableErc20Address,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mintableErc20ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof mintableErc20ABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mintableErc20ABI, TFunctionName, TMode>({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mintableErc20ABI}__ and `functionName` set to `"approve"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function useMintableErc20Approve<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mintableErc20Address,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mintableErc20ABI, 'approve'>['request']['abi'],
        'approve',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'approve' }
    : UseContractWriteConfig<typeof mintableErc20ABI, 'approve', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'approve'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mintableErc20ABI, 'approve', TMode>({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mintableErc20ABI}__ and `functionName` set to `"decreaseAllowance"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function useMintableErc20DecreaseAllowance<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mintableErc20Address,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mintableErc20ABI, 'decreaseAllowance'>['request']['abi'],
        'decreaseAllowance',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'decreaseAllowance' }
    : UseContractWriteConfig<typeof mintableErc20ABI, 'decreaseAllowance', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'decreaseAllowance'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mintableErc20ABI, 'decreaseAllowance', TMode>({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    functionName: 'decreaseAllowance',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mintableErc20ABI}__ and `functionName` set to `"increaseAllowance"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function useMintableErc20IncreaseAllowance<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mintableErc20Address,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mintableErc20ABI, 'increaseAllowance'>['request']['abi'],
        'increaseAllowance',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'increaseAllowance' }
    : UseContractWriteConfig<typeof mintableErc20ABI, 'increaseAllowance', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'increaseAllowance'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mintableErc20ABI, 'increaseAllowance', TMode>({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    functionName: 'increaseAllowance',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mintableErc20ABI}__ and `functionName` set to `"mint"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function useMintableErc20Mint<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mintableErc20Address,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mintableErc20ABI, 'mint'>['request']['abi'],
        'mint',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'mint' }
    : UseContractWriteConfig<typeof mintableErc20ABI, 'mint', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'mint'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mintableErc20ABI, 'mint', TMode>({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    functionName: 'mint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mintableErc20ABI}__ and `functionName` set to `"transfer"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function useMintableErc20Transfer<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mintableErc20Address,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mintableErc20ABI, 'transfer'>['request']['abi'],
        'transfer',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'transfer' }
    : UseContractWriteConfig<typeof mintableErc20ABI, 'transfer', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'transfer'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mintableErc20ABI, 'transfer', TMode>({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mintableErc20ABI}__ and `functionName` set to `"transferFrom"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function useMintableErc20TransferFrom<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mintableErc20Address,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mintableErc20ABI, 'transferFrom'>['request']['abi'],
        'transferFrom',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof mintableErc20ABI, 'transferFrom', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'transferFrom'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mintableErc20ABI, 'transferFrom', TMode>({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mintableErc20ABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function usePrepareMintableErc20Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mintableErc20ABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof mintableErc20Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    ...config,
  } as UsePrepareContractWriteConfig<typeof mintableErc20ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mintableErc20ABI}__ and `functionName` set to `"approve"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function usePrepareMintableErc20Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mintableErc20ABI, 'approve'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mintableErc20Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mintableErc20ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mintableErc20ABI}__ and `functionName` set to `"decreaseAllowance"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function usePrepareMintableErc20DecreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mintableErc20ABI, 'decreaseAllowance'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mintableErc20Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    functionName: 'decreaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mintableErc20ABI, 'decreaseAllowance'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mintableErc20ABI}__ and `functionName` set to `"increaseAllowance"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function usePrepareMintableErc20IncreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mintableErc20ABI, 'increaseAllowance'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mintableErc20Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    functionName: 'increaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mintableErc20ABI, 'increaseAllowance'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mintableErc20ABI}__ and `functionName` set to `"mint"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function usePrepareMintableErc20Mint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mintableErc20ABI, 'mint'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mintableErc20Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    functionName: 'mint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mintableErc20ABI, 'mint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mintableErc20ABI}__ and `functionName` set to `"transfer"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function usePrepareMintableErc20Transfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mintableErc20ABI, 'transfer'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mintableErc20Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mintableErc20ABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mintableErc20ABI}__ and `functionName` set to `"transferFrom"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function usePrepareMintableErc20TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mintableErc20ABI, 'transferFrom'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mintableErc20Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mintableErc20ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mintableErc20ABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function useMintableErc20Event<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof mintableErc20ABI, TEventName>, 'abi' | 'address'> & {
    chainId?: keyof typeof mintableErc20Address
  } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    ...config,
  } as UseContractEventConfig<typeof mintableErc20ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mintableErc20ABI}__ and `eventName` set to `"Approval"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function useMintableErc20ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof mintableErc20ABI, 'Approval'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof mintableErc20Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof mintableErc20ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mintableErc20ABI}__ and `eventName` set to `"Transfer"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd)
 */
export function useMintableErc20TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof mintableErc20ABI, 'Transfer'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof mintableErc20Address } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mintableErc20ABI,
    address: mintableErc20Address[chainId as keyof typeof mintableErc20Address],
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof mintableErc20ABI, 'Transfer'>)
}
