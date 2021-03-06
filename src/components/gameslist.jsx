import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GamePreview from "./gamepreview";

const games = [
  {
    title: "Crosswords",
    desc: "Learn cool new words with Crosswords",
    image:
      "https://www.dictionary.com/e/wp-content/uploads/2020/04/20200414_crossword_1000x700.jpg",
  },
  {
    title: "Sudoku",
    desc: "Challenge yourself with a number puzzle",
    image:
      "https://cdn.sudokuonline.io/static/images/sudoku-kids/numbers-6-6.jpg",
  },
  {
    title: "Minesweeper",
    desc: "Count and search for the buried mines!",
    image: "data:image/png;base64,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"
  },
  {
    title: "Connect the Dots",
    desc: "Can you complete the picture?",
    image: "https://www.thesprucecrafts.com/thmb/1iZeGHUd4GyKLjea67mtlmlJHxI=/1310x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/car-5845b7275f9b5851e56f4206.jpg",
  },
  {
    title: "Colouring Pages",
    desc: "Fill these pretty pictures with your favourite colours!",
    image: "https://cdn.discordapp.com/attachments/864497771422941184/866021796352360519/1569958547color-by-number-easy-printable-picture-fish.png",
  },
  {
    title: "Quick Maths",
    desc: "2 + 2 = 4, -1 that's 3 - Quick Maths.",
    image: "https://cdn.discordapp.com/attachments/864497771422941184/866022329145491506/maths_icon_varwhq.png",
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
