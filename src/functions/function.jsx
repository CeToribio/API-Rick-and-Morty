import axios from "axios";

const apiRickandMorty = async (state) => {
  const data = await axios.get("https://rickandmortyapi.com/api/character");
   //state(api.data.results);
  state(data.data.results)
  //console.log(data)
};

const oneCharacter = async(id, state) => {
  const data = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  state(data.data)
}

export {
  apiRickandMorty,
  oneCharacter

}
