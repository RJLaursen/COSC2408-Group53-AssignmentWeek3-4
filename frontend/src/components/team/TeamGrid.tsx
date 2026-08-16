'use client'

import React, { useState } from 'react'

type Member = {
  name: string
  role: string
  blurb: string
  photo?: string
}

function getInitials(name: string) {
  const trimmed = name.trim()
  if (!trimmed) return 'NA'

  const parts = trimmed.split(/\s+/).filter(Boolean)

  if (parts.length === 1) {
    const firstPart = parts[0]
    return firstPart ? firstPart.slice(0, 2).toUpperCase() : 'NA'
  }

  const first = parts[0]?.[0]
  const last = parts[parts.length - 1]?.[0]

  if (!first || !last) return 'NA'

  return `${first}${last}`.toUpperCase()
}

function MemberCard({ member }: { member: Member }) {
  const [expanded, setExpanded] = useState(false)

  const hasPhoto = Boolean(member.photo && member.photo.trim())
  const initials = getInitials(member.name)

  const shouldTruncate = member.blurb.length > 120
  const displayedBlurb =
    !expanded && shouldTruncate
      ? `${member.blurb.slice(0, 120).trim()}...`
      : member.blurb

  return (
    <article className="flex h-full flex-col items-center rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
        {member.name}
      </h3>

      {hasPhoto ? (
        <img
          src={member.photo}
          alt={member.name}
          className="mb-4 h-24 w-24 rounded-full object-cover"
        />
      ) : (
        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-zinc-200 text-2xl font-semibold text-zinc-700 dark:bg-zinc-700 dark:text-zinc-100">
          {initials}
        </div>
      )}

      <p className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
        {member.role}
      </p>

      <div className="flex flex-1 flex-col items-center">
        <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
          {displayedBlurb}
        </p>

        {shouldTruncate && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>
    </article>
  )
}

export default function TeamGrid({
  teamName,
  teamBlurb,
  members,
}: {
  teamName: string
  teamBlurb?: string
  members: Member[]
}) {
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
          {teamName}
        </h1>

        {teamBlurb && (
          <p className="mt-2 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
            {teamBlurb}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  )
}