import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Minesweeper from "../assets/minesweeper.png";
import Sudoku from "../assets/thesudoku-image.png";

const useStyles = makeStyles((theme) => ({
  rounded: {
    color: "#fff",
    backgroundColor: "#fff"
  },
  image: {
    width: "100%",
  },
  achievements: {
    display: "flex",
    flexWrap: "wrap",
    padding: "10px",
  },
  achievement: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
  },
  title: {
    textAlign: "center",
  },
}));

const MinesweeperIcon = () => {
  const classes = useStyles();

  return (
    <Avatar variant="rounded" className={classes.rounded}>
      <img
        className={classes.image}
        src={Minesweeper}
        alt="minesweeper achievement"
      />
    </Avatar>
  );
};

const SudokuIcon = () => {
  const classes = useStyles();

  return (
    <Avatar variant="rounded" className={classes.rounded}>
      <img className={classes.image} src={Sudoku} alt="Sudoku achievement" />
    </Avatar>
  );
};

const ColouringIcon = () => {
  const classes = useStyles();

  return (
    <Avatar variant="rounded" className={classes.rounded}>
      <img className={classes.image} src="https://images.all-free-download.com/images/graphicthumb/coloful_paint_brushes_design_elements_532771.jpg" alt="Colouring achievement" />
    </Avatar>
  );
};

const ConnectIcon = () => {
  const classes = useStyles();

  return (
    <Avatar variant="rounded" className={classes.rounded}>
      <img className={classes.image} src="https://i.stack.imgur.com/9i9bO.png" alt="Connect achievement" />
    </Avatar>
  );
};

const Summary = ({ stats }) => {
  const classes = useStyles();

  return (
    <Card variant="outlined">
      <h3 className={classes.title}>🏆 Achievements 🏆</h3>
      <div className={classes.achievements}>
        <Paper className={classes.achievement} elevation={1} title>
          <Typography variant="body1" color="textSecondary" component="p">
            {stats.minesweeper && <b>Minesweeper</b>}
          </Typography>
          <Typography variant="body3" color="textSecondary" component="p">
            {stats.minesweeper && <p>{stats.minesweeper.hours} hours</p>}
          </Typography>
          {stats.minesweeper && <MinesweeperIcon />}
        </Paper>

        <Paper className={classes.achievement} elevation={1} title>
          <Typography variant="body1" color="textSecondary" component="p">
            {stats.sudoku && <b>Sudoku</b>}
          </Typography>
          <Typography variant="body3" color="textSecondary" component="p">
            {stats.sudoku && <p>{stats.sudoku.hours} hours</p>}
          </Typography>
          {stats.sudoku && <SudokuIcon />}
        </Paper>

        <Paper className={classes.achievement} elevation={1} title>
          <Typography variant="body1" color="textSecondary" component="p">
            {stats.colouring && <b>Colouring</b>}
          </Typography>
          <Typography variant="body3" color="textSecondary" component="p">
            {stats.colouring && <p>{stats.colouring.hours} hours</p>}
          </Typography>
          {stats.colouring && <ColouringIcon />}
        </Paper>

        <Paper className={classes.achievement} elevation={1} title>
          <Typography variant="body1" color="textSecondary" component="p">
            {stats.connect && <b>Connect the Dots</b>}
          </Typography>
          <Typography variant="body3" color="textSecondary" component="p">
            {stats.connect && <p>{stats.connect.hours} hours</p>}
          </Typography>
          {stats.connect && <ConnectIcon />}
        </Paper>
      </div>
    </Card>
  );
};

export default Summary;
