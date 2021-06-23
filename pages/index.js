import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { fetchAll } from "../src/ApiStore";

//const [country, setCountry] = useState();
const data1 = getNewsProps();
console.log(data1);

export default function Index({ articles }) {
  return (
    <Card>
      {articles.map((article) => (
        <CardContent key={article.title}>{article.description}</CardContent>
      ))}
    </Card>
  );
}

// API SEARCH PART //

async function getNewsProps() {
  const data = await fetchAll();
  if (!data) {
    return window.alert("News not found");
  }
  return {
    newsProps: { articles: [data.articles] },
  };
}
