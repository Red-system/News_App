//Get API request with JS fetch

const ApiKey = f32ff45aa2804cc7aa48f9a7d619eb7b;
const BaseURL = "https://newsapi.org/v2/everything";

export async function fetchAll() {
  const res = `${BaseURL}&${ApiKey}`;

  //return await res.json();
  return await console.log(res);
}

export default fetchAll;
