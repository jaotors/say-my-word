type Word = {
  word: string
  meaning: string
  sentence: string
}

export type WordOfTheDay = {
  id: number
  word: Word
}

export const getWord = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/api/dictionary/today-word`
    )

    if (!res.ok) {
      throw new Error(`Failed to fetch word: ${res.status} ${res.statusText}`)
    }

    const data = (await res.json().then(val => val.word)) as WordOfTheDay

    return data
  } catch (err) {
    return err
  }
}
