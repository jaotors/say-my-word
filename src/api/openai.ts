import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const getWord = async () => {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4.1-nano',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        {
          role: 'user',
          content: `Provide a simple yet advanced word and make a one sentence with it, include the meaning of it but don't add it in the sentence. Make the response like {"word": "example", "sentence": "This is an example sentence.", "meaning": "This is the meaning of the word"}, so that I can parse it easily.`,
        },
      ],
    })
    return completion.choices[0].message?.content
    // return `{"word": "example", "sentence": "This is an example sentence.", "meaning": "This is the meaning of the word"}`
  } catch (error: any) {
    console.error('Error generating completion:', error)
  }
}
