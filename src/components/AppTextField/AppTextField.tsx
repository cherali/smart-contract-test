import { ChangeEventHandler, forwardRef } from 'react'
import clsx from 'clsx'
import type { AppTextFieldProps } from './types'

const AppTextField = forwardRef<HTMLInputElement, AppTextFieldProps>(
  (
    {
      type = 'text',
      label,
      labelClasses = '',
      name,
      value,
      onChange,
      containerClasses,
      error,
      helperText,
      className,
      required = false,
      labelMargin = 'mb-2',
      hideErrorText = false,
      ...props
    },
    ref,
  ) => {
    const handleChange: ChangeEventHandler<HTMLInputElement> = evt => {
      if (evt.target.validity.valid) {
        onChange && onChange(evt)
      }
    }

    return (
      <section className={containerClasses}>
        <section>
          {label && (
            <label
              htmlFor={name}
              className={clsx(
                labelClasses,
                labelMargin,
                !error ? 'text-white' : 'text-red-500',
                'block font-medium capitalize text-sm',
              )}
            >
              {label}
              {required ? <span className='text-red-500'>{' *'}</span> : ''}
            </label>
          )}

          <section className='relative'>
            <input
              name={name}
              value={value}
              onChange={handleChange}
              className={clsx(
                className,
                'w-full text-white focus:ring-0 px-2 py-2',
                'bg-gray-900 border border-gray-700 rounded-md outline-none block text-base',
                error
                  ? 'focus:border-red-600 border-red-500 !text-red-600'
                  : 'focus:border-purple-600 border-gray-800',
                'disabled:text-gray-400 disabled:bg-gray-700 disabled:cursor-not-allowed',
              )}
              type={type}
              {...props}
              ref={ref}
            />
          </section>
        </section>

        {error && !hideErrorText && (
          <p className='block mt-2 font-medium text-red-500 px-3 text-sm'>{helperText}</p>
        )}
      </section>
    )
  },
)

export default AppTextField
