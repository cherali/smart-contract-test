import type { ElementType, ReactNode } from 'react'
import type {
  SubmitHandler,
  UseFormReturn,
  Mode,
  FieldValues,
  UseFormSetValue,
  UseFormTrigger,
  UseFormClearErrors,
  UseFormGetFieldState,
  FormState,
  UseFormWatch,
} from 'react-hook-form'

type FormChildren = JSX.Element | JSX.Element[] | ReactNode

export interface AppFormProps {
  onSubmit?: SubmitHandler
  defaultValues?: object
  validationSchema?: any
  children: FormChildren
  mode?: Mode
}
