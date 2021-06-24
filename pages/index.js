import React from "react";
import Layout from "../src/layout";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import { fetchAll } from "../src/api";

const useStyles = makeStyles({
  root: {
    maxWidth: 900,
  },
  media: {
    height: 345,
  },
});

//const [country, setCountry] = useState();

export default function Index({ articles }) {
  // console.log(articles)
  const classes = useStyles();
  return (
    <Layout>
      <Card className={classes.root}>
        {articles.map((article) => (
          <CardContent key={article.title}>
            <CardActionArea>
              <CardMedia className={classes.media} image={article.urlToImage} />
              <Typography className={classes.title} gutterBottom variant="h5" my="5">
                {article.title}
              </Typography>
              <Typography variant="body2">{article.publishedAt}</Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                m={4}
              >
                {article.description}
              </Typography>
              <Typography variant="caption">{article.author}</Typography>
            </CardActionArea>
            <CardActions>
              <Button href={article.url} size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </CardContent>
        ))}
      </Card>
    </Layout>
  );
}

// API SEARCH PART //

export async function getServerSideProps(context) {
  const data = await fetchAll();
  if (!data) {
    return window.alert("News not found");
  }
  return {
    props: { articles: data.articles },
  };
}
