import { useEffect, useState } from "react";
import apiRickandMorty from "../functions/function";

function Home() {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    const api = apiRickandMorty(setCharacters);

    
  }, []);

  return (
    <>
      {characters != null ? (
        // characters.map((character) => {
        //   return(<div key={character.id}>
        //     <p>{character.name}</p>

        //   </div>)
        // })
        console.log(characters)
      ) 
      : (
        <p>no hay personajes</p>
      )}
    </>
  );
}

export default Home;
