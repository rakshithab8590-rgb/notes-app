import { useState } from 'react'

export default function NoteForm({ addNote }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text.trim()) return

    addNote(text)

    setText('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow-sm mb-5"
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a note..."
        rows={4}
        className="w-full border border-slate-200 rounded-xl p-3 text-sm outline-none"
      />

      <button
        type="submit"
        className="mt-3 bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-xl"
      >
        Add Note
      </button>
    </form>
  )
}