//Get API request with JS fetch

const ApiKey = "f32ff45aa2804cc7aa48f9a7d619eb7b";
const BaseURL = "https://newsapi.org/v2/top-headlines";
const defaultCoutry = "fr";

export async function fetchAll() {
  const res = await fetch(
    `${BaseURL}?country=${defaultCoutry}&apiKey=${ApiKey}`
  );

  return await res.json();
  //return await console.log(res);
}
