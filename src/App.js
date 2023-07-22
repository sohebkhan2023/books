
import './App.css';
import React,{useState,useEffect,useRef} from 'react';
import logo from './logo.png';
import icon from './KeazoNBOOKS.png';
import heart from './bx_bx-book-heart.png';
import notice from './notice.png';
import premium from './premium.png';

import Bookstore from './Bookstore';
import More from './More';

function App() {
  const [query,setQuery]=useState("Sherlock Holmes");
  let reference=useRef(null);
  const api=`https://www.googleapis.com/books/v1/volumes?q=${query}`;
  function handleSubmit(event)
  {
    event.preventDefault();
    setQuery(reference.current.value);

  }
  
  
  return <div>
    <form style={{display:"flex"}} onSubmit={handleSubmit} className='nav'>
    <img style={{height:"30px",marginLeft:"20px",marginTop:"10px"}}src={logo}/>
    <img style={{height:"20px",marginLeft:"10px",marginTop:"10px"}}src={icon}/>
      
      <div id='wrap' style={{marginLeft:"20px"}}>
      
      <input  type='text' ref={reference} placeholder='Search for the book you want and read it now... Sherlock Holmes, Harry Pot...'/>
        <button  onClick={handleSubmit}>Search</button>
      </div>
      <img style={{height:"30px",marginLeft:"20px",marginTop:"10px"}}src={heart}/>
      <img style={{height:"30px",marginLeft:"20px",marginTop:"10px"}}src={notice}/>
      <img style={{height:"30px",marginLeft:"20px",marginTop:"10px"}}src={premium}/>
       
    </form>
     <Bookstore api={api} query={query}/>
     <br/><br/><br/>
     <h2 style={{color:"white",marginLeft:"20px"}}>More Books</h2>
     <More api='https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes' />
     <More api='https://www.googleapis.com/books/v1/volumes?q=Harry+Potter' />

     </div>
}

export default App;