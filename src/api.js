const ApiKey = "f32ff45aa2804cc7aa48f9a7d619eb7b";
const BaseURL = "https://newsapi.org/v2/top-headlines";
const defaultCoutry = "fr";

import slugify from "slugify";

/**
 * Fetch all top headlines from the default country (France by default)
 */
export async function fetchAll() {
  const res = await fetch(
    `${BaseURL}?country=${defaultCoutry}&apiKey=${ApiKey}`
  );

  return await res.json();
}

/**
 *
 * Fetch one new story with the title slugged since there are no IDs
 */
export async function fetchOne(slug, country = defaultCoutry) {
  
  const data = await fetchAll();
  let article = null;

  if (data) {
    article = data.articles.find(
      (payload) =>
        slugify(payload.title, { lower: true, strict: true }) === slug
    );

    return article;
  }
}
