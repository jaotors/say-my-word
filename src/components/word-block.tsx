import { getWord } from '@/api/openai'
import { use } from 'react'

const WordBlock = () => {
  const data = use(getWord()) as string | undefined
  console.log('data', data)
  let word = 'Word'
  let sentence = 'lorem ipsum dolor sit amet.'
  let meaning = 'lorem ipsum dolor sit amet.'

  if (data) {
    try {
      const parsed = JSON.parse(data)
      word = parsed.word || word
      sentence = parsed.sentence || sentence
      meaning = parsed.meaning || meaning
    } catch (e) {
      console.error('Error parsing JSON:', e)
    }
  }

  return (
    <div className='flex flex-col items-center gap-10'>
      <div className='flex flex-col gap-8'>
        <h2 className='text-6xl font-semibold'>{word}</h2>
        <p className='text-4xl'>{sentence}</p>
      </div>
      <p className='text-base font-light'>{meaning}</p>
    </div>
  )
}

export default WordBlock
