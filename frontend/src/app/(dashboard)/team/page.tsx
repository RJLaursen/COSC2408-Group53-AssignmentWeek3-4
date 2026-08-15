import React from 'react'
import { requireAuth } from '@/actions/auth.actions'
import TeamGrid from '@/components/team/TeamGrid'

type Member = {
  name: string
  role: string
  blurb: string
  photo: string
}

export default async function TeamPage() {
  await requireAuth()

  const members: Member[] = [
    {
      name: 'Kristen Angel Trinidad',
      role: 'Project Manager',
      blurb: 'PLACEHOLDER',
      photo: '',
    },
    {
      name: 'Rian Joseph Laursen',
      role: 'Business Analyst',
      blurb: 'PLACEHOLDER',
      photo: '',
    },
    {
      name: 'Tate Barbuto',
      role: 'User Experience Designer',
      blurb: 'PLACEHOLDER',
      photo: '',
    },
    {
      name: 'Aryan Mehra',
      role: 'Developer',
      blurb: 'PLACEHOLDER',
      photo: '',
    },
  ]

  return (
    <div className="p-6">
      <TeamGrid teamName="Group 53" members={members} />
    </div>
  )
}
