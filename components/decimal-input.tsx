import { Dispatch, SetStateAction } from 'react'
import { Input } from '@/components/ui/input'

type DecimalInputProps = {
  setFn: Dispatch<SetStateAction<number>>
  placeholder: string
}

export const DecimalInput = ({ setFn, placeholder }: DecimalInputProps) => {
  return (
    <Input
      step="0.1"
      min="0"
      id={placeholder}
      placeholder={placeholder}
      inputMode={'decimal'}
      type={'text'}
      onChange={e => {
        const normalizedValue = e.target.value.replace(',', '.')
        const parsedValue = parseFloat(normalizedValue)
        if (!isNaN(parsedValue)) {
          setFn(parsedValue)
          return
        }
        setFn(0)
      }}
    />
  )
}
