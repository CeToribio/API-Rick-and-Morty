import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRickandMorty } from "../functions/function";

function Home() {
  const [characters, setCharacters] = useState(null);
  console.log(characters)

  const navigate = useNavigate()

  useEffect(() => {
    apiRickandMorty(setCharacters);

  }, []);

  return (
    <>
      <button onClick={()=> navigate('/prueba')}>holissss</button>
      {characters != null ? (
        characters.map((character) => {
          return (
            <div key={character.id}>
              <a href={`/character/${character.id}`}>{character.name}</a>
              <h3 onClick={()=> navigate(`/character/${character.id}`)}>{character.name}</h3>
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
