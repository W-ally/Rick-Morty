import axios from "axios";
import React, { useEffect, useState } from "react";

const Resident = ({ url }) => {

    const[character,setcharacter]= useState({});

    useEffect(()=>{ 
    axios.get(url) 
    .then((res)=> setcharacter(res.data))
},[url]);

    
    return (
        <div>
          <li>

           <div className="resident__card">
               
              <ul className="character__item">
                <div><img src={character.image} alt="character" /></div>
                <div><b>Name:</b>{character.name}</div>
                <div> <b>Status:</b>{character.status}</div>
                <div><b>Origin:</b>{character.origin?.name} </div>
                <div><b>Episode: </b>{character.episode?.length}</div>

              </ul>
              
               
             

           </div>

              
          </li>
      </div>
    );
}; 

export default Resident;