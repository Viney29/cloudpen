import React,{useContext} from 'react'
import noteContext from '../context/notes/notesContext';

function NoteItem(props) {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const {note} = props;
  return (
    <div className='note'>
      <h3 className='title'>{note.title}</h3>
      <p className='desc'>{note.description}</p>
      <i className="fa-sharp fa-solid fa-trash" onClick={()=>{deleteNote(note._id)}}></i>
      <i className="fa-solid fa-pen-to-square"></i>
    </div>
  )
}

export default NoteItem
