import { useEffect, useState } from "react";
import { apiRickandMorty } from "../functions/function";

function Home() {
  const [characters, setCharacters] = useState(null);
  //console.log(characters)

  useEffect(() => {
    apiRickandMorty(setCharacters);

  }, []);

  return (
    <>
      {characters != null ? (
        characters.map((character) => {
          return (
            <div key={character.id}>
              <a href={`/character/${character.id}`}>{character.name}</a>
              <img src={character.image} alt="" />
          
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Home;
