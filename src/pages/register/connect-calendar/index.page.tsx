import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ArrowRight, Check } from 'phosphor-react'
// import { api } from "@/lib/axios"

import { Container, Header } from '@/pages/register/styles'

import {
  AuthError,
  ConnectBox,
  ConnectItem,
} from '@/pages/register/connect-calendar/styles'

export default function Register() {
  const session = useSession()
  const router = useRouter()

  const hasAuthError = !!router.query.error
  const isSignedId = session.status === 'authenticated'

  // async function handleRegister() {

  // }

  async function handleConnectCalendar() {
    await signIn('google')
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Connect your calendar!</Heading>
        <Text>
          Connect your calendar to automatically check busy times and new events
          as they are scheduled.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          {isSignedId ? (
            <Button size="sm" disabled>
              Connected
              <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleConnectCalendar}
            >
              Connect
              <ArrowRight />
            </Button>
          )}
        </ConnectItem>

        {hasAuthError && (
          <AuthError size="sm">
            Failed to connect to Google, check that you have enabled permissions
            to access Google Calendar.
          </AuthError>
        )}

        <Button type="submit" disabled={!isSignedId}>
          Next step
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
