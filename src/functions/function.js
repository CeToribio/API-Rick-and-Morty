import axios from "axios";

const apiRickandMorty = async (state) => {
  const api = await axios.get("https://rickandmortyapi.com/api/character");
   state(api.data.results);
};

export default apiRickandMorty;
