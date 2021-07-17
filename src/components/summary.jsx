import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Minesweeper from "../assets/minesweeper.png";

const Summary = ({ stats }) => {
  return (
    <Paper variant="outlined">
      <Typography
        variant="body1"
        color="textSecondary"
        component="p"
      >
        { stats.minesweeper && <p>{stats.minesweeper.hours} hours</p> }
        { stats.minesweeper && <image source={Minesweeper} alt="minesweeper achievement" />} 
      </Typography>
    </Paper>
  );
};

export default Summary;
