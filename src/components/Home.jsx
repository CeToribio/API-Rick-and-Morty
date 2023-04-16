import { useEffect, useState } from "react";
import apiRickandMorty from "../functions/function";
import axios from "axios";

function Home() {
  const [characters, setCharacters] = useState(null);
  //console.log(characters)

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        const data = response.data.results;
        //console.log(data)
        setCharacters(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {characters != null ? (
        characters.map((character) => {
          return (
            <div key={character.id}>
              <a href="#">{character.name}</a>
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
