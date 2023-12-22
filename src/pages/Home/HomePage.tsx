import { useStepStore } from '@/store/stepStore'
import { useAccount } from 'wagmi'
import AppSteps from '@/components/AppSteps/AppSteps'
import Connection from './Connection'
import MintForm from './Forms/MintForm'
import TransactionForm from './Forms/TransactionForm'
import Success from './Success'

const HomePage = () => {
  const step = useStepStore(s => s.step)
  const { isConnected } = useAccount()

  const steps = ['mint', 'transfer', 'success']

  return (
    <section className='flex justify-center w-full md:mt-20 max-md:mt-0'>
      <section className='w-1/3 max-xl:w-3/5 max-lg:w-2/3 max-md:w-full max-md:px-4'>
        <Connection />
        <section className='border border-cyan-800 p-4 pb-6 rounded-md shadow-md shadow-cyan-900'>
          {isConnected ? (
            <>
              <AppSteps className='mb-6 mt-2' steps={steps} activeIndex={step} />
              <section className=''>
                {step === 0 && <MintForm />}
                {step === 1 && <TransactionForm />}
                {step === 2 && <Success />}
              </section>
            </>
          ) : (
            <h3 className='capitalize text-yellow-500'>
              in order to interact with ERC20 you must connect to a wallet first
            </h3>
          )}
        </section>
      </section>
    </section>
  )
}

export default HomePage
