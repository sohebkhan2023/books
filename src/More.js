import React,{useEffect,useState} from 'react'

function More(props) {
        const[user,setUser]=useState([]);
       
        useEffect(()=>
        {
          fetchData();
        },[]);
        
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
        let grid=
        {
            marginLeft:"2%",
        marginTop:"2.5%",
        display:"grid",
        gridTemplateColumns:"repeat(6,1fr)",
        // gap:"20px",
        }
        return (
           
            <div style={grid} >
              {
                  
                user.slice(3,9).map((item)=>
                {
                  return <img src={item.volumeInfo.imageLinks.thumbnail}/>
                      
      
                     
                })
              }
            </div>
          );
           
        
        
    }

export default More;