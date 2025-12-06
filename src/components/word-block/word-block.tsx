import { WordOfTheDay } from '@/app/api/route'

const getWord = async () => {
  return fetch(`${process.env.NEXT_PUBLIC_URL}/api`).then((res) => res.json())
}

const WordBlock = async () => {
  const data = (await getWord()) as WordOfTheDay

  const word = data.word.word
  const sentence = data.word.sentence
  const meaning = data.word.meaning

  return (
    <div className='flex flex-col items-center gap-10'>
      <div className='flex flex-col gap-8'>
        <h2 className='text-6xl font-semibold'>{word}</h2>
        <p className='text-4xl'>{sentence}</p>
      </div>
      <p className='text-2xl font-light italic'>{meaning}</p>
    </div>
  )
}

export default WordBlock
