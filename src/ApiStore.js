//Get API request with JS fetch

const ApiKey = "f32ff45aa2804cc7aa48f9a7d619eb7b";
const BaseURL = "https://newsapi.org/v2/everything";
const defaultCoutry = "fr";

async function fetchAll() {
  const res = `${BaseURL}?country=${defaultCoutry}&apiKey=${ApiKey}`;

  return await res.json();
  //return await console.log(res);
}

export default fetchAll;
