import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles({
  root: {
    width: 550,
    margin: 15,
  },
  media: {
    height: 300,
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingBottom: "3%",
  },
  link: {
    textDecoration: "none",
  },
});

export default function GamePreview({ game }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={game.image}
          title={game.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {game.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {game.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttons}>
        <Button size="large" color="primary">
          <FavoriteBorderIcon />
        </Button>
        <Link to={`/games/${game.title.toLowerCase()}`} className={classes.link} >
          <Button size="large" variant="contained" color="primary">
            Play
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
