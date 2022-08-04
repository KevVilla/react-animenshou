import { URL } from "../Util.js";

const URL_MANGA = `${URL}/manga`;

const fetchGetManga = async () => {
  try {
    const response = await fetch(URL_MANGA);
    console.log(response);
    const data = await response.json();
    console.log(URL_MANGA);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchGetManga };