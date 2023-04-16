import { useParams } from "react-router-dom";
import { oneCharacter } from "../functions/function";
import { useEffect, useState } from "react";

function Character(){
    const [character, setCharacter] = useState(null)

    const {id} =useParams();
    
    useEffect(()=> {
        oneCharacter(id,setCharacter)
    })
    return(
        <>
        {
            character !=null ? 
            <div>
                <p>{character.name}</p>
                <img src={character.image} alt="" />
            </div>
            : <p>Loading...</p> 
            
        }
        </>
    )

}

export default Character