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
  ];

  const [notes, setNotes] = useState(initialNotes);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
