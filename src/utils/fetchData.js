import axios from "axios";

export const youTubeUrl = "https://youtube-search-and-download.p.rapidapi.com";
export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_APIKEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  try {
    const res = await axios.get(url, options);
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
};
