import React,{useState} from 'react'
import "./book.css";
import More from './More.js';

function Book ({item},key) {
    const[expand,setExpand]=useState(false);
    
    function handleexpand(event)
    {
       
        setExpand(!expand);
    }
    function readNow()
    {
        window.open(item.volumeInfo.previewLink);
    }
    function moreInfo()
    {
        window.open(item.volumeInfo.infoLink);
    }
    const bannerStyle = {
        width: expand ? '1200px' : '400px',
       
       
      };

      const buttonstyle=
      {
        marginLeft:expand? "700px":"50px",
        background:"rgba(244, 113, 168, 0.38)",
        color:"white",

      }
      const infobuttonstyle=
      {
        marginLeft:expand? "10px":"55px",
        background:"rgba(244, 113, 168, 0.38)",
        color:"white",
        display:expand?"block":"none"

      }
      const datestyle=
      {
        color:"rgba(255,255,255,0.5",
        display:expand?"block":"none",
        marginLeft:"530px",
        marginTop:"20px",
      }
      let info=
      {
        color:"beige",
        display:expand?"block":"none",
        marginTop:"10px",
        marginLeft:"20px"
      }
    if(expand)
    {
        
        // alert(check);

       
    }
     
    
    
  return (
    <div id='book'style={bannerStyle} onClick={handleexpand}>
         <img id="img" src={item.volumeInfo.imageLinks.thumbnail}/>
         <div id="side-item">
          
          <div style={{display:"flex"}}>
          <h2 style={{color:"white"}}>{item.volumeInfo.title}</h2>
          <div style={datestyle}>Published On: {item.volumeInfo.publishedDate}</div>
          </div>
           
            
           
              
              <div id='text'>
              <h4 style={{display:expand?"block":"none",color:"rgba(255,255,255,0.5"}}>{item.volumeInfo.authors}</h4>
                <p style={{color:"rgba(255,255,255,0.5"}}>{item.volumeInfo.description}</p>
                
              </div>
              <div style={info}>Avg rating:{item.volumeInfo.averageRating} |Rating Count:{item.volumeInfo.ratingCount} | Publisher: {item.volumeInfo.publisher} |Language: {item.volumeInfo.laguage} </div>
              
            <div style={{display:"flex"}}>
            <button style={buttonstyle} onClick={readNow}>Read Now!</button>
              <button style={infobuttonstyle} onClick={moreInfo}>More Info!</button>
            </div>
              
         </div>
        

    </div>
    
    
  )
}

export default Book;