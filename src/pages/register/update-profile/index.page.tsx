import {
  Avatar,
  Button,
  Heading,
  MultiStep,
  Text,
  TextArea,
} from '@ignite-ui/react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'
import { api } from '@/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Container, Header } from '@/pages/register/styles'
import {
  FormAnnotation,
  ProfileBox,
} from '@/pages/register/update-profile/styles'

const updateProfileSchema = z.object({
  bio: z.string(),
})

type UpdateProfileData = z.infer<typeof updateProfileSchema>

export default function UpdateProfile() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateProfileData>({
    resolver: zodResolver(updateProfileSchema),
  })

  const session = useSession()
  const router = useRouter()

  async function handleUpdateProfile(data: UpdateProfileData) {
    await api.put('/users/profile', {
      bio: data.bio,
    })

    await router.push(`/schedule/${session.data?.user.username}`)
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Welcome to Ignite Call!</Heading>
        <Text>
          We need some information to create your profile! You can edit this
          information later.
        </Text>

        <MultiStep size={4} currentStep={4} />
      </Header>

      <ProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
        <label>
          <Text>Profile picture</Text>
          <Avatar
            src={session.data?.user.avatar_url}
            referrerPolicy="no-referrer"
            alt={session.data?.user.name}
          />
        </label>

        <label>
          <Text size="sm">About you</Text>
          <TextArea {...register('bio')} />
          <FormAnnotation size="sm">
            Tell us a bit about yourself. This will be displayed on your
            personal page.
          </FormAnnotation>
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Finish
          <ArrowRight />
        </Button>
      </ProfileBox>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  return {
    props: {
      session,
    },
  }
}
