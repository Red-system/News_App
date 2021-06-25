import React from "react";
import slugify from "slugify";

import Layout from "../src/layout";
import {
  Button,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Card,
  Typography,
  Link,
  makeStyles,
} from "@material-ui/core";
import { fetchAll } from "../src/api";

const useStyles = makeStyles({
  root: {
    maxWidth: 900,
  },
  media: {
    height: 345,
  },
});

export default function Index({ articles }) {
  const classes = useStyles();
  return (
    <Layout>
      <Card className={classes.root}>
        {articles.map((article) => (
          <CardContent key={article.title}>
            <CardActionArea>
              <CardMedia className={classes.media} image={article.urlToImage} />
              <Typography
                className={classes.title}
                gutterBottom
                variant="h5"
                my="5"
              >
                {article.title}
              </Typography>
              
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
              <Button
                size="small"
                color="primary"
                component={Link}
                href={`/details/${slugify(article.title, {
                  lower: true,
                  strict: true,
                })}`}
              >
                Learn More
              </Button>
            </CardActions>
          </CardContent>
        ))}
      </Card>
    </Layout>
  );
}

/**
 * Fetching the datas from src/api
 */
export async function getServerSideProps(context) {
  const data = await fetchAll();
  if (!data) {
    return { articles: [] };
  }
  return {
    props: { articles: data.articles },
  };
}
