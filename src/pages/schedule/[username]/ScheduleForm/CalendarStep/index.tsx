import { Calendar } from '@/components/Calendar'

import { Container } from '@/pages/schedule/[username]/ScheduleForm/CalendarStep/styles'

export function CalendarStep() {
  return (
    <Container>
      <Calendar />
    </Container>
  )
}
