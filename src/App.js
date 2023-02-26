import './App.css';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NotesState';


function App() {
  return (
    <>
    <NoteState>
      <div className='cloudpen'>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
          </Routes>
        </Router>
      </div>
    </NoteState>
    </>
  );
}

export default App;
