import type { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import AppTextField from '@/components/AppTextField/AppTextField'
import type { AppTextFormFieldProps } from './types'

const AppTextFormField: FC<AppTextFormFieldProps> = ({ name, ...props }) => {
  const { control } = useFormContext()

  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <section className='w-full'>
          <AppTextField
            error={Boolean(error?.message)}
            helperText={error?.message}
            {...Object.assign({}, props, field)}
          />
        </section>
      )}
      name={name}
      control={control}
    />
  )
}

export default AppTextFormField
