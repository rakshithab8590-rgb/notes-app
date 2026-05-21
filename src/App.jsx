import { useState } from 'react'
import Navbar from './components/Navbar'
import NoteForm from './components/NoteForm'
import NotesList from './components/NotesList'

export default function App() {

  const [notes, setNotes] = useState([])

  const addNote = (text) => {

    const newNote = {
      id: Date.now(),
      text,
    }

    setNotes([newNote, ...notes])
  }

  const deleteNote = (id) => {

    setNotes(
      notes.filter(note => note.id !== id)
    )
  }

  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="max-w-3xl mx-auto p-4">

        <NoteForm addNote={addNote} />

        <NotesList
          notes={notes}
          deleteNote={deleteNote}
        />

      </div>

    </div>
  )
}