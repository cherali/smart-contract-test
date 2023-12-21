import type { FC } from 'react'
import { useMintStore } from '@/store/mintStore'

interface InfoProps {
  walletAddress?: string
}

const Info: FC<InfoProps> = ({ walletAddress }) => {
  const mint = useMintStore(s => s.mint)
  return (
    <section className='rounded-base bg-gray-900 px-4 py-2 my-2'>
      <h3 className='text-center font-bold text-lg capitalize text-gray-300 underline mb-4'>
        transfer information:
      </h3>
      <section className='flex items-center justify-between word-break gap-2 max-md:flex-col max-md:gap-4'>
        <section className='w-full'>
          <p className='capitalize text-base font-bold text-gray-500 underline'>wallet address:</p>
          <p>{walletAddress || '...'}</p>
        </section>

        <section className='w-full'>
          <p className='capitalize text-base font-bold text-gray-500 underline'>amount:</p>
          <p>{mint}</p>
        </section>
      </section>
    </section>
  )
}

export default Info
