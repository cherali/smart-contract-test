import type {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
} from 'react'

export interface AppTextFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  helperText?: string
  label?: string | ReactNode
  labelClasses?: string
  containerClasses?: string
  labelMargin?: string
  hideErrorText?: boolean
  type?: Exclude<HTMLInputTypeAttribute, 'checkbox' | 'radio'>
}
