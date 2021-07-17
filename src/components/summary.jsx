import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { green } from '@material-ui/core/colors';
import Minesweeper from "../assets/minesweeper.png";

const useStyles = makeStyles((theme) => ({
  rounded: {
    color: '#fff',
    backgroundColor: green[500],
  },
  image: {
    width: "100%",
  },
}));

const MinesweeperIcon = () => {
  const classes = useStyles();

  return (
    <Avatar variant="rounded" className={classes.rounded}>
      <img className={classes.image} src={Minesweeper} alt="minesweeper achievement" />
    </Avatar>
  );
};

const Summary = ({ stats }) => {
  return (
    <Paper variant="outlined">
      <Typography variant="body1" color="textSecondary" component="p">
        {stats.minesweeper && <p>{stats.minesweeper.hours} hours</p>}
        {stats.minesweeper && <MinesweeperIcon /> }
      </Typography>
    </Paper>
  );
};

export default Summary;
