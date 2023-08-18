'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { DecimalInput } from '@/components/decimal-input'

export const Converter = () => {
  const [fromADV, setFromADV] = useState(0)
  const [fromL, setFromL] = useState(0)
  const [toADV, setToADV] = useState(0)
  const [result, setResult] = useState(0)

  useEffect(() => {
    if (fromADV > 0 && fromL > 0 && toADV > 0) {
      setResult((fromADV * fromL) / toADV)
      return
    }
    setResult(0)
  }, [fromADV, fromL, toADV])

  return (
    <div>
      <div
        className={cn(
          'flex',
          'flex-col',
          'justify-center',
          'items-center',
          'gap-2'
        )}
      >
        <DecimalInput setFn={setFromADV} placeholder={'from %'} />
        <DecimalInput setFn={setFromL} placeholder={'from L'} />
      </div>
      <Separator className={cn('my-4')} />
      <DecimalInput setFn={setToADV} placeholder={'to %'} />
      {result > 0 && (
        <div
          className={cn(
            'flex',
            'justify-center',
            'items-center',
            'mt-12',
            'text-2xl'
          )}
        >
          {Number(Number(result).toFixed(2))} L
        </div>
      )}
    </div>
  )
}
