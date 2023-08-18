import { Converter } from '@/components/converter'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <main className={cn('container', 'mx-auto', 'max-w-xs', 'mt-12')}>
      <Converter />
    </main>
  )
}
