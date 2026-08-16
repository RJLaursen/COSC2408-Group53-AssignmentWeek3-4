import React from 'react'

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
  if (parts.length === 0) return 'NA'
  if (parts.length === 1) {
    const firstPart = parts[0]
    return firstPart ? firstPart.slice(0, 2).toUpperCase() : 'NA'
  }

  const first = parts[0]?.[0]
  const last = parts[parts.length - 1]?.[0]
  if (!first || !last) return trimmed.slice(0, 2).toUpperCase()

  return `${first}${last}`.toUpperCase()
}

export default function TeamGrid({
  teamName,
  members,
}: {
  teamName: string
  members: Member[]
}) {
  return (
    <section>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">{teamName}</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((m) => {
          const hasPhoto = Boolean(m.photo && m.photo.trim())
          const initials = getInitials(m.name)

          return (
            <article
              key={m.name}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm"
            >
              {hasPhoto ? (
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-40 object-cover"
                />
              ) : (
                <div className="flex h-40 w-full items-center justify-center bg-zinc-200 text-3xl font-semibold text-zinc-700 dark:bg-zinc-700 dark:text-zinc-100">
                  {initials}
                </div>
              )}

              <div className="p-4 flex flex-col">
                <h3 className="text-lg font-medium mb-1">{m.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{m.role}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{m.blurb}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
