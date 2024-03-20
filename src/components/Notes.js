import React, { useState } from "react";

const list1 = []



function Notes() {
  const[visibility, setVisibility] = useState(false);
  const[notes, setNotes] = useState([])
  const colors = ["lightpink", "lightgreen" ]
  const [miscellanous, setMiscellanous] = useState({
    title: "",
    body: "",
  });
  const popUp = ()=>{
  
    setVisibility(!visibility)
  }
    
   const addNote = (event) => {

     const {name,value} = event.target
     
     setMiscellanous ({...miscellanous, [name]: value})
     
   }

   const appendNote = () => {
     if(miscellanous .body.trim().length > 0){
      setNotes([ ...notes, miscellanous])
      setVisibility(!visibility) 
     }
     
   }

  return (
    <>
     



<div className="modal" style={{display: visibility  ? "block" : "none"}}>
  {visibility &&  <div className="modal-content" >
    
    <textarea type="text" id="note-body" name="body" value={miscellanous.body} onChange={addNote}></textarea>
    <div className="button-group">
    <button onClick={appendNote}>Add note</button>
    <button onClick={popUp} >Close</button>
    </div>
  </div>} 
 
  
 
</div> 


    <div className="notes">
      <div className="header">
        <h1>Notes</h1>
        <button onClick={popUp} className="btn">+</button>
        </div>
       <div className="note-container" >
         {notes.map((nt,index)=>(
            <div  key= {notes.indexOf(nt)}className="note-card" style={{backgroundColor: colors[index % colors.length]}}>
              <p>{nt.body}</p>
              
            </div>
         ))}
         
         
       </div>
       </div>
    
    </>
  );
}

export default Notes;
