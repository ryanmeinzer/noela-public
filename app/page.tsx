import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { type Message } from 'ai'
import React from 'react'

export const runtime = 'edge'

export default function IndexPage() {
  const id = nanoid()

  const openerPrompt: Message[] = [
    {
    id: id,
    role: 'assistant', 
    content: "Hey there, I'm Noela! I arrange weekly local outings for new friends who share hobbies and availability. No more awkward networking or schedule wrangling 🤪"
    },
    {
      id: id,
      role: 'assistant', 
      content: "Ryan Meinzer (ryanmeinzer.com) is my creator, and together we promise to keep your information secure. So, what's your name?"
    },
]

  return <Chat id={id} initialMessages={openerPrompt} />
}
