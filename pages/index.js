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

const [country, setCountry] = useState();

export default function Index() {
  return (
    <Card>
      <CardContent>Hello world</CardContent>
    </Card>
  );
}
