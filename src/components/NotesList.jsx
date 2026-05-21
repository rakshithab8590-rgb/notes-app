import NoteCard from './NoteCard'

export default function NotesList({ notes, deleteNote }) {

  return (
    <div className="grid gap-4">

      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          deleteNote={deleteNote}
        />
      ))}

    </div>
  )
}