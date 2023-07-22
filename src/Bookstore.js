import React,{useState,useEffect} from 'react'
import Book from './Book';

function Bookstore(props) {
    const[user,setUser]=useState([]);
   
    useEffect(()=>
    {
      fetchData();
    },[props.query]);
    
    async function fetchData()
    {
        try {
            let response=await fetch(props.api);
             let jsonData = await response.json();
             setUser(jsonData.items);
        } 
        catch (error) {
            alert(error);
        }
      
    }
    const grid={
        marginLeft:"2%",
        marginTop:"2.5%",
        display:"grid",
        gridTemplateColumns:"repeat(3,3fr)",
        gap:"20px",
        // width: "1519.778564453125px",
        // height: "311.04803466796875px",
        // top: "181px",
        // left: "49px",
        // borderRadius: "2px"

       
    }
    return (
       
      <div style={grid}>
        {
            
          user.slice(0,3).map((item,i)=>
          {
            console.log(i+" ");
            return <Book key={i} id={i}  item={item}/>
                

               
          })
        }
      </div>
    );
}

export default Bookstore;