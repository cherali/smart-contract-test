import type { FC } from 'react'
import type { AppAlertProps } from './types'
import clsx from 'clsx'

const AppAlert: FC<AppAlertProps> = ({ text = '', className = '' }) => {
  return (
    <section
      className={clsx(
        'flex items-center p-4 mb-4 text-sm border rounded-lg bg-gray-900 text-red-600 border-red-800',
        'word-break',
        className,
      )}
      role='alert'
    >
      <svg
        className='flex-shrink-0 inline w-5 h-5 me-3'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 20 20'
      >
        <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
      </svg>
      <span className='sr-only'>{text}</span>
      <section className='font-medium text-base'>
        <span>{text} </span>
      </section>
    </section>
  )
}

export default AppAlert
