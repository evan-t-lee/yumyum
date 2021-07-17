import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GamePreview from "./gamepreview";

const games = [
  {
    title: "Crosswords",
    desc: "Ligma",
    image:
      "https://www.dictionary.com/e/wp-content/uploads/2020/04/20200414_crossword_1000x700.jpg",
  },
  {
    title: "Sudoku",
    desc: "Sugma",
    image:
      "https://cdn.sudokuonline.io/static/images/sudoku-kids/numbers-6-6.jpg",
  },
];

const useStyles = makeStyles({
  list: {
    display: "flex",
    flexWrap: "wrap",
  },
});

const GamesList = () => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      {games.length && games.map((game) => <GamePreview game={game} />)}
    </div>
  );
};

export default GamesList;
