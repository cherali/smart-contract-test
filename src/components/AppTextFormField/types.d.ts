import type { AppTextFieldProps } from '@/components/AppTextField/types'

type EType = 'error' | 'value' | 'onChange' | 'onClear' | 'name'

export interface AppTextFormFieldProps extends Omit<AppTextFieldProps, EType> {
  name: string
  label?: string
  containerClasses?: string
}
