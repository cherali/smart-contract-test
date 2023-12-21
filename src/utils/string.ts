import type { BaseError } from 'viem'

export const getErrorMessage = (error: any) => {
  const err = error as BaseError
  return err.shortMessage || err.message
}
