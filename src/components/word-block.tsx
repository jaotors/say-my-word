import { getWord, WordOfTheDay } from '@/api/word'
import { use } from 'react'

const WordBlock = () => {
  const data = use(getWord()) as WordOfTheDay
  let word = 'Word'
  let sentence = 'lorem ipsum dolor sit amet.'
  let meaning = 'lorem ipsum dolor sit amet.'

  if (data) {
    try {
      word = data.word.word || word
      sentence = data.word.sentence || sentence
      meaning = data.word.meaning || meaning
    } catch (e) {
      console.error('Error:', e)
    }
  }

  return (
    <div className='flex flex-col items-center gap-10'>
      <div className='flex flex-col gap-8'>
        <h2 className='text-6xl font-semibold'>{word}</h2>
        <p className='text-4xl'>{sentence}</p>
      </div>
      <p className='text-base font-light italic'>{meaning}</p>
    </div>
  )
}

export default WordBlock
