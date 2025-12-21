export const getWord = async () => {
  const base = process.env.NEXT_PUBLIC_API_URL

  if (!base) {
    throw new Error(
      'NEXT_PUBLIC_API_URL is not defined. Set it in your .env or environment.'
    )
  }

  const url = new URL('/api/dictionary/today-word', base).toString()
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`Failed to fetch word: ${res.status} ${res.statusText}`)
  }

  const json = await res.json()
  // if the remote API wraps the result in a `word` property, return that
  return json?.word ?? json
}
