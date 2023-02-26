import React from 'react'

function NoteItem(props) {
    const {note} = props;
  return (
    <div>
      {note.title}
    </div>
  )
}

export default NoteItem
