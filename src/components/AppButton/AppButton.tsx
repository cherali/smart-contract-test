import type { FC } from 'react'
import type { AppButtonProps } from './types'
import clsx from 'clsx'

const AppButton: FC<AppButtonProps> = ({
  disabled = false,
  className = '',
  children,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      type='submit'
      className={clsx(
        className,
        'bg-purple-700 text-white w-full py-2 px-4 rounded-md capitalize outline-none',
        'focus:ring-2 focus:ring-purple-800 focus:ring-offset-1 focus:ring-offset-transparent',
        'disabled:text-gray-400 disabled:bg-gray-700',
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default AppButton
