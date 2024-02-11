import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Gather your favorite activities & skill levels',
    // message: `What is a "serverless function"?`
  },
  {
    heading: 'Understand when you are free to do them',
    // message: 'Summarize the following article for a 2nd grader: \n'
  },
  {
    heading: 'Know what city you are in to connect you with others',
    // message: `Draft an email to my boss about the following: \n`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to Noela.ai!
        </h1>
        {/* <p className="mb-2 leading-normal text-muted-foreground">
          This is Noela.
        </p> */}
        <p className="leading-normal text-muted-foreground">
          Noela finds you fun things to do with others. 
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              // onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
