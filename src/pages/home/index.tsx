import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'

import { ClaimUsernameForm } from '@/pages/home/components/ClaimUsernameForm'

import { Container, Hero, Preview } from '@/pages/home/styles'

import previewImage from '@/assets/app-preview.png'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Uncomplicated schedule
        </Heading>
        <Text size="xl">
          Connect your calendar and let people schedule appointments in their
          free time.
        </Text>

        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendar symbolizing running application"
        />
      </Preview>
    </Container>
  )
}
