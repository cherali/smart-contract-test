import { useEffect } from 'react'
import { useAccount, useWaitForTransaction } from 'wagmi'
import * as yup from 'yup'
import type { MintFormInput } from '@/types/contract'
import { useMintableErc20Mint, usePrepareMintableErc20Mint } from '@/hooks/contractHooks'
import { getErrorMessage } from '@/utils/string'
import { useMintStore } from '@/store/mintStore'
import { useStepStore } from '@/store/stepStore'
import AppForm from '@/components/AppForm/AppForm'
import AppTextFormField from '@/components/AppTextFormField/AppTextFormField'
import AppButton from '@/components/AppButton/AppButton'
import AppAlert from '@/components/AppAlert/AppAlert'

const MintForm = () => {
  const mint = useMintStore(s => s.mint)
  const setMint = useMintStore(s => s.setMint)
  const { isConnected } = useAccount()
  const setStep = useStepStore(s => s.setStep)

  const prepareMintQuery = usePrepareMintableErc20Mint({
    // @ts-ignore
    args: mint ? [BigInt(mint)] : null,
    enabled: Boolean(mint),
    cacheTime: 0,
  })
  const mintQuery = useMintableErc20Mint(prepareMintQuery.config)

  const mintTransactionQuery = useWaitForTransaction({
    hash: mintQuery.data?.hash,
  })

  // trigger write command to push mint into wallet
  useEffect(() => {
    if (
      prepareMintQuery.status === 'success' &&
      mintQuery.status === 'idle' &&
      !mintQuery.isLoading
    ) {
      mintQuery.write?.()
    }
  }, [prepareMintQuery, mintQuery])

  useEffect(() => {
    if (mintTransactionQuery.status === 'success' && !mintTransactionQuery.isFetching) {
      setStep(1)
    }
  }, [mintTransactionQuery])

  const onSubmit = (values: MintFormInput) => {
    // reset previous mint
    mintQuery.reset()

    setMint(values.mint)
  }

  const validationSchema = yup.object().shape({
    mint: yup.number().required().integer().typeError('mint must be a positive integer number.'),
  })

  const defaultValues = {
    mint: '',
  }

  const isLoading = mintQuery.isLoading || mintTransactionQuery.isFetching

  return (
    <section className='fade-anim'>
      <AppForm
        onSubmit={onSubmit}
        defaultValues={defaultValues}
        validationSchema={validationSchema}
      >
        <section className='flex flex-col gap-4 pb-4'>
          <AppTextFormField
            name='mint'
            placeholder='enter number to mint'
            label='mint value'
            inputMode='numeric'
            required
            pattern='^[1-9][0-9]*$'
            disabled={isLoading}
          />
          <AppButton disabled={isLoading}>{isLoading ? 'waiting...' : 'mint tokens'}</AppButton>
        </section>
      </AppForm>

      {prepareMintQuery.isError && isConnected && (
        <AppAlert text={getErrorMessage(prepareMintQuery.error)} className='mt-4' />
      )}
      {mintQuery.isError && <AppAlert text={getErrorMessage(mintQuery.error)} className='mt-4' />}
      {mintTransactionQuery.isError && (
        <AppAlert text={getErrorMessage(mintTransactionQuery.error)} className='mt-4' />
      )}
    </section>
  )
}

export default MintForm
