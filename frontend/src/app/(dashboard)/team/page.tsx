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
      blurb: 'Keeps the team organised, the tasks moving, and everyone pointed in roughly the same direction.',
      photo: '',
    },
    {
      name: 'Rian Joseph Laursen',
      role: 'Business Analyst',
      blurb: 'Turns client needs into requirements the team can actually build.',
      photo: '',
    },
    {
      name: 'Tate Barbuto',
      role: 'User Experience Designer',
      blurb: 'Focuses on making the project intuitive, usable, and nice to look at.',
      photo: '',
    },
    {
      name: 'Aryan Mehra',
      role: 'Developer',
      blurb: 'Turns ideas and designs into working software, building practical solutions that keeps the project running.',
      photo: '',
    },
  ]

  return (
    <div className="p-6">
      <TeamGrid teamName="Group 53" members={members} />
    </div>
  )
}
