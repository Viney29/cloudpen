import React, { useContext } from 'react'
import notesContext from '../context/notes/notesContext'
import NoteItem from './NoteItem';


function Notes() {
    const context = useContext(notesContext);
    const {notes} = context;
  return (
    <div className='notes'>
        <h2 className='heading'>Your Saved Notes</h2>
        {notes.map((note)=>{
            return <NoteItem note={note} key={note._id}/>
        })}
    </div>
  )
}

export default Notes
