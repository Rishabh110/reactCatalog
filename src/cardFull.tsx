import React, { useState, useEffect } from "react";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";
import { Product } from "./Cards";
import { fetchSingleCatalogItem } from "./mocks/catalog";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    width: "50%",
    height: "35%",
    margin: "auto",
    justifyContent: "center",
    flexDirection: "row"
  },
  media: {
    height: 300,
    width: 400,
    // paddingTop: 20, // 16:9
    margin: "auto"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const CardFull = (props: RouteComponentProps<{ productId: string }>) => {
  const productId = Number(props.match.params.productId);
  const classes = useStyles();
  const [productInfo, setProductInfo] = useState<Product | null>(null);

  useEffect(() => {
    if (!isNaN(productId)) {
      fetchSingleCatalogItem(productId).then(data => {
        setProductInfo(data.body);
      });
    }
  }, []);

  return (
    <ul>
      {productInfo && (
        <Card className={classes.card}>
          <CardHeader title={productInfo.manufacturerName} />
          <CardContent>
            {" "}
            <Typography
              variant="body2"
              color="textPrimary"
              component="p"
              style={{ fontSize: "1.1rem" }}
            >
              ${productInfo.retailPrice}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ marginBottom: 20 }}
            >
              {productInfo.description}
            </Typography>
            <CardMedia className={classes.media} image={productInfo.image} />
          </CardContent>
          <Link to={`/products/`}>
            <Button>Back to Products</Button>
          </Link>
        </Card>
      )}
    </ul>
  );
};

export default withRouter(CardFull);
