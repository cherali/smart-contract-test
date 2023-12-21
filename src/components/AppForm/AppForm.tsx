import type { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object as yupObject } from 'yup'
import type { AppFormProps } from './types'

const AppForm: FC<AppFormProps> = ({
  children,
  onSubmit,
  defaultValues,
  validationSchema = yupObject({}),
  mode = 'onSubmit',
}) => {
  const resolver = yupResolver(validationSchema)
  const methods = useForm({ defaultValues, resolver, criteriaMode: 'all', mode })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} onReset={() => methods.reset(defaultValues)}>
        {children}
      </form>
    </FormProvider>
  )
}

export default AppForm
