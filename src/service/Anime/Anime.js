import { URL } from "../Util.js";

const URL_ANIME = `${URL}/anime`;
const URL_TOP_ANIME = `${URL}/top/anime`;

const fetchGetAnime = async () => {
  try {
    const response = await fetch(URL_ANIME);
    console.log(response);
    const data = await response.json();
    console.log(URL_ANIME);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchGetTopAnime = async () => {
  try {
    const response = await fetch(URL_TOP_ANIME);
    console.log(response);
    const data = await response.json();
    console.log(URL_ANIME);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchGetAnime, fetchGetTopAnime };
