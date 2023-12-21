import { useEffect, useState } from 'react'
import { isAddress } from 'viem'
import * as yup from 'yup'
import type { TransactionFromInput } from '@/types/contract'
import { useMintableErc20Transfer } from '@/hooks/contractHooks'
import { getErrorMessage } from '@/utils/string'
import { useMintStore } from '@/store/mintStore'
import { useStepStore } from '@/store/stepStore'
import AppForm from '@/components/AppForm/AppForm'
import AppTextFormField from '@/components/AppTextFormField/AppTextFormField'
import AppButton from '@/components/AppButton/AppButton'
import AppAlert from '@/components/AppAlert/AppAlert'
import Info from '../Info'

const TransactionForm = () => {
  const [address, setAddress] = useState<`0x${string}` | ''>('')
  const mint = useMintStore(s => s.mint)
  const setStep = useStepStore(s => s.setStep)

  const transferQuery = useMintableErc20Transfer({
    // @ts-ignore
    args: address ? [address, BigInt(mint)] : null,
  })

  useEffect(() => {
    if (
      typeof transferQuery.data === 'undefined' &&
      !transferQuery.isLoading &&
      transferQuery.status === 'idle' &&
      address
    ) {
      console.log('write transfer')
      transferQuery.write?.()
    }
  }, [transferQuery])

  useEffect(() => {
    if (transferQuery.isSuccess && !transferQuery.isLoading) {
      setStep(2)
    }
  }, [transferQuery])

  const onSubmit = (values: TransactionFromInput) => {
    transferQuery.reset()

    setAddress(values.address)
  }

  const validationSchema = yup.object().shape({
    address: yup
      .string()
      .required()
      .test('address', 'Address is not valid.', value => isAddress(value)),
  })

  const defaultValues = {
    address: '',
  }

  const isDisabled = transferQuery.isLoading

  return (
    <section className='fade-anim'>
      <AppForm
        onSubmit={onSubmit}
        defaultValues={defaultValues}
        validationSchema={validationSchema}
      >
        <section className='flex flex-col gap-4'>
          <AppTextFormField
            name='address'
            placeholder='enter wallet address 0x'
            label='wallet address'
            required
            disabled={isDisabled}
          />

          <Info walletAddress={address} />
          <AppButton disabled={isDisabled}>
            {transferQuery.isLoading ? 'waiting for conformation' : 'transfer tokens'}
          </AppButton>
        </section>
      </AppForm>
      {transferQuery.isError && (
        <AppAlert text={getErrorMessage(transferQuery.error)} className='mt-4' />
      )}
    </section>
  )
}

export default TransactionForm
