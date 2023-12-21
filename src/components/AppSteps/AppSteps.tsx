import type { FC } from 'react'
import type { AppStepsProps } from './types'
import clsx from 'clsx'

const AppSteps: FC<AppStepsProps> = ({ activeIndex, steps, className = '' }) => {
  const stepsLength = steps.length
  return (
    <section className={clsx('flex w-full justify-between', 'max-sm:flex-col', className)}>
      {steps.map((step, index) => (
        <section key={index} className={index < stepsLength - 1 ? 'flex-1 max-sm:pb-2' : undefined}>
          <section className='flex items-center gap-2 max-sm:flex-col max-sm:items-start'>
            <section className='flex items-center gap-2'>
              <section className='relative h-6 w-6'>
                <span className='absolute z-10 flex justify-center items-center w-6 h-6'>
                  {index + 1}
                </span>
                <span
                  className={clsx(
                    'absolute w-6 h-6 flex justify-center items-center rounded-full',
                    activeIndex >= index ? 'bg-cyan-600' : 'bg-gray-600',
                  )}
                ></span>
              </section>
              <p
                className={clsx(
                  'capitalize ms-0.5',
                  activeIndex >= index ? 'text-cyan-600' : 'text-gray-400',
                )}
              >
                {step}
              </p>
            </section>
            {index < stepsLength - 1 && (
              <span
                className={clsx(
                  'sm:w-full sm:h-0.5 inline-flex ms-2 me-4',
                  'max-sm:h-4 max-sm:w-0.5 max-sm:ms-[11px] max-sm:me-0',
                  activeIndex - 1 >= index ? 'bg-cyan-800' : 'bg-gray-800',
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
