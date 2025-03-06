import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import { useState } from "react"

export default function App(){
  const [notes,setNotes] = useState([])

  function addNote(note){
    setNotes(prevNotes =>{
      return [...prevNotes,note]
    })
 
  }
  function deleteNote(id){
    setNotes(prevNotes => {
    return prevNotes.filter((note,i)=>{
        return i !== id;
      })
    }
    )  
    
    

  }
  return (
    <>
    <Header/>
    <CreateNote onAdd = {addNote}/>
   {notes.map((note,index) => {
    return  <Note key = {index} id = {index} del={deleteNote}  note = {note}/>
   })}
   
    <Footer/>
    </>
  )
}