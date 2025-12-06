import { NextResponse } from 'next/server'

type Word = {
  word: string
  meaning: string
  sentence: string
}

export type WordOfTheDay = {
  id: number
  word: Word
}

export async function GET() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/dictionary/today-word`
    )

    if (!res.ok) {
      throw new Error(`Failed to fetch word: ${res.status} ${res.statusText}`)
    }

    const data = (await res.json().then((val) => val.word)) as WordOfTheDay

    return NextResponse.json(data)
  } catch (err) {
    return new Response('Internal Server Error', {
      status: 500,
    })
  }
}
