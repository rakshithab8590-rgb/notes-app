export default function NoteCard({ note, deleteNote }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex items-start justify-between">
      <p className="text-slate-700 text-sm">
        {note.text}
      </p>

      <button
        onClick={() => deleteNote(note.id)}
        className="text-red-500 hover:text-red-600 text-sm"
      >
        Delete
      </button>
    </div>
  )
}