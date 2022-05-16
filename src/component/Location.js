import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Resident from './Resident';
import image1 from "../assets/img/image2.svg";



const Location = ({image3}) => {

    const [ local,setlocation] = useState([]);
    const [id, setId] = useState("");
    
    useEffect(()=>{
        const random = Math.floor(Math.random() * 126)+1;
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
        .then((res)=> setlocation (res.data))
    },[])
    console.log(local)

    
  const searchId = () => {
    console.log(id);
    
    if (id<=126) {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
          .then((res) => setlocation(res.data));
      }else{
          alert("Exist only 126 world,please write number of 1 to 126")
      }
        
    }

    return (
    <div className ="ctn__location">
        
       <div className='ctn__search' >  
          <img  src={image1} alt="" srcset="" />
          <input type="text" onChange={(e) => setId(e.target.value)} value={id} placeholder="type a location ID" />
          <button onClick={searchId}>Search</button>

       </div>

       <div className="description">

           <h1>{local.name} </h1>
           <span>
           <b>Type:</b>{local.type} <b>Dimension:</b>{local.dimension} <b>Populations:</b>{local.residents?.length}
           </span>

       </div>
  
      <div className="resident">
           <ul className="resident__list">
           {local.residents?.map(resident => (
            <Resident url={resident} key={resident} />
          ))}
          </ul>
      </div>

    </div>
    );
};

export default Location;