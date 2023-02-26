import { useState } from "react";
import NoteContext from "./notesContext";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "63f271234ff590b8677b4c30",
      user: "63f11551311ef5da5ad52341",
      title: "My title",
      description: "My description",
      tag: "personal",
      date: "2023-02-19T18:57:39.833Z",
      __v: 0,
    },
    {
      _id: "63f282e5015ca00d273670e4",
      user: "63f11551311ef5da5ad52341",
      title: "My title updated add",
      description: "My description update",
      tag: "personal",
      date: "2023-02-19T20:13:25.817Z",
      __v: 0,
    },
    {
      _id: "63f271234ff590b8677b4c32",
      user: "63f11551311ef5da5ad52341",
      title: "My title",
      description: "My description",
      tag: "personal",
      date: "2023-02-19T18:57:39.833Z",
      __v: 0,
    },
    {
      _id: "63f282e5015ca00d273670e3",
      user: "63f11551311ef5da5ad52341",
      title: "My title updated add",
      description: "My description update",
      tag: "personal",
      date: "2023-02-19T20:13:25.817Z",
      __v: 0,
    },
    {
      _id: "63f271234ff590b8677b4c35",
      user: "63f11551311ef5da5ad52341",
      title: "My title",
      description: "My description",
      tag: "personal",
      date: "2023-02-19T18:57:39.833Z",
      __v: 0,
    },
    {
      _id: "63f282e5015ca00d273670e9",
      user: "63f11551311ef5da5ad52341",
      title: "My title updated add",
      description: "My description update",
      tag: "personal",
      date: "2023-02-19T20:13:25.817Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(initialNotes);

  // Add a note
  const addNote = (title, description, tag) => {
    console.log('Adding a note');
    // TO DO - API CALL
    const note = {
      _id: "63f282e5015ca00d273670ada",
      user: "63f11551311ef5da5ad52341",
      title: title,
      description: description,
      tag: tag,
      date: "2023-02-19T20:13:25.817Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a note

  const deleteNote = (id) => {
    console.log('Deleting a Note with id' + id);
      // TO DO - API CALL
    const newNotes = notes.filter((note)=> {return note._id !== id})
    setNotes(newNotes)
  };

  // Edit a note
  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
