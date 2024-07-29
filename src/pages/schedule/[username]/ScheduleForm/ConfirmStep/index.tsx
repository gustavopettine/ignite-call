import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { CalendarBlank, Clock } from 'phosphor-react'

import {
  ConfirmForm,
  FormActions,
  FormHeader,
} from '@/pages/schedule/[username]/ScheduleForm/ConfirmStep/styles'

export function ConfirmStep() {
  function handleConfirmScheduling() {}

  return (
    <ConfirmForm as="form" onSubmit={handleConfirmScheduling}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          July 29th, 2024
        </Text>
        <Text>
          <Clock />
          18:00h
        </Text>
      </FormHeader>

      <label>
        <Text size="sm">Full name</Text>
        <TextInput placeholder="Your name" />
      </label>

      <label>
        <Text size="sm">E-mail address</Text>
        <TextInput type="email" placeholder="your-name@example.com" />
      </label>

      <label>
        <Text size="sm">Observations</Text>
        <TextArea />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">
          Cancel
        </Button>
        <Button type="submit">Confirm</Button>
      </FormActions>
    </ConfirmForm>
  )
}
