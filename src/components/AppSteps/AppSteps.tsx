import type { FC } from 'react'
import type { AppStepsProps } from './types'
import clsx from 'clsx'

const AppSteps: FC<AppStepsProps> = ({ activeIndex, steps }) => {
  const stepsLength = steps.length
  return (
    <section className='flex w-full justify-between'>
      {steps.map((step, index) => (
        <section key={index} className={index < stepsLength - 1 ? 'flex-1' : undefined}>
          <section className='flex items-center gap-2'>
            <section className='relative h-6 w-6'>
              <span className='absolute z-10 flex justify-center items-center w-6 h-6'>
                {index + 1}
              </span>
              <span
                className={clsx(
                  'absolute w-6 h-6 flex justify-center items-center rounded-full',
                  activeIndex >= index ? 'bg-purple-500' : 'bg-gray-600',
                )}
              ></span>
            </section>
            <p
              className={clsx(
                'capitalize ms-1.5',
                activeIndex >= index ? 'text-purple-500' : 'text-gray-400',
              )}
            >
              {step}
            </p>
            {index < stepsLength - 1 && (
              <span
                className={clsx(
                  'w-full h-0.5 inline-flex ms-2 me-4',
                  activeIndex - 1 >= index ? 'bg-purple-600' : 'bg-gray-800',
                )}
              />
            )}
          </section>
        </section>
      ))}
    </section>
  )
}

export default AppSteps
