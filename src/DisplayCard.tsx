import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Collapse,
  Typography,
  Button
} from "@material-ui/core";
import { Product } from "./Cards";
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  card: {
    width: 345,
    margin: "10px 0",
    display: "flex",
    flexDirection: "column"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
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
  link: {
    marginTop: "auto",
    marginBottom: "5px"
  },
  MuiButton: {
    textDecoration: "none"
  }
}));
interface Props {
  product: Product;
}
const DisplayCard: FC<Props> = props => {
  const classes = useStyles();
  const [expanded] = React.useState(false);
  return (
    <Card className={classes.card}>
      <CardHeader
        title={props.product.id}
        subheader={props.product.manufacturerName}
      />
      ${props.product.retailPrice}
      <CardMedia
        className={classes.media}
        image={props.product.thumbnail}
        style={{ marginTop: "10px" }}
      />
      <CardContent>
        <Typography
          style={{ fontSize: "1.4em" }}
          variant="body1"
          color="textPrimary"
          component="p"
        >
          {/* <Typography style={{fontSize: ".5em"}} variant="body2" color="textSecondary" component="p">
            {props.product.description}
          </Typography> */}
        </Typography>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent></CardContent>
      </Collapse>
      <Link className={classes.link} to={`/details/${props.product.id}`}>
        <Button style={{ textDecoration: "none" }}>Details</Button>
      </Link>
    </Card>
  );
};
export default DisplayCard;
