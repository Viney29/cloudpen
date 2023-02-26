import React,{useContext, useState} from 'react'
import notesContext from '../context/notes/notesContext'

function AddNote() {
    const context = useContext(notesContext);
    const {addNote} = context;
    const [note, setNote] = useState({title:"", description:"", tag:"default"})
    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }
    const onChange = (e)=>{
        setNote({...note, [e.target.name]:e.target.value})
    }
  return (
    <div className='addNote'>
        <h2 className='heading'>Add a Note</h2>
        <form className='form'>
            <div className='formRow'>
                <label htmlFor='title' className='label'>Title</label>
                <input className="titleText" type="text" id="title" name="title" onChange={onChange} />
            </div>
            <div className='formRow'>
                <label htmlFor='description' className='label'>Description</label>
                <input type="textarea" className="descText"  id="description" name="description" onChange={onChange} />
            </div>
            <button className="btn btn-submit" type="submit" onClick={handleClick}>Add Note</button>
        </form>
    </div>
  )
}

export default AddNote
