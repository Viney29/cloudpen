import React, { useContext } from 'react'
import notesContext from '../context/notes/notesContext'
import NoteItem from './NoteItem';


function Notes() {
    const context = useContext(notesContext);
    const {notes, setNotes} = context;
  return (
    <div>
        {notes.map((note)=>{
            return <NoteItem note={note}/>
        })}
    </div>
  )
}

export default Notes
