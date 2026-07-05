import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const { prompt } = await req.json()
    const caption = generateCaption(prompt || '')
    return NextResponse.json({ caption })
  } catch (err) {
    return NextResponse.json({ error: 'failed' }, { status: 500 })
  }
}

function generateCaption(input) {
  const trimmed = (input || '').trim()
  if (!trimmed) return "Here's a quick caption: Living my best life ✨ #vibes"

  // Simple templates to produce varied captions
  const templates = [
    `Feeling ${trimmed} and grateful. #${slug(trimmed)}`,
    `${trimmed} days are the best days. 🌞 #${slug(trimmed)}`,
    `Couldn't resist sharing this ${trimmed} moment. ❤️` ,
    `When ${trimmed} meets good company. 😎 #life` ,
    `${capitalize(trimmed)} — small moments, big memories.`
  ]

  const pick = templates[Math.floor(Math.random() * templates.length)]
  return pick
}

function slug(s) { return s.replace(/[^a-z0-9]+/gi, '').toLowerCase().slice(0,20) }
function capitalize(s){ return s.charAt(0).toUpperCase() + s.slice(1) }
