import { Suspense } from 'react'
import WordBlock from '@/components/word-block'

export default async function Home() {
  return (
    <div className='grid place-content-center text-center h-screen gap-8'>
      <h1 className='text-4xl font-bold'>Say the Word</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <WordBlock />
      </Suspense>
    </div>
  )
}
