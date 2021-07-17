import React from "react";
import { useRef, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
// "#90ee90"

const useStyles = makeStyles({
  correct: {
  	border: "2px solid #84fa84",
  	borderRadius: "5px",
  	height: "56px",
  	width: "56px",
  	textAlign: "center",
  	fontSize: "150%",
  	paddingTop: "10px",
  }
});

const CrosswordCell = ({c}) => {
	const classes = useStyles();

	const [state, setState] = useState(false); 
	const ref = useRef("");

	const handleCheckLetter = (c) => {
		console.log(c, state, ref.current.value.toUpperCase());
		if (c === ref.current.value.toUpperCase()) {
			console.log(state);
			setState(true);
		}
	}

	if (!state) {
		return (
			<TextField
				variant="outlined"
				fullWidth
				inputRef={ref}
				onChange={() => handleCheckLetter(c)}/>
		)
	} else {
		return <div className={classes.correct}>{c}</div>;
	}
}

export default CrosswordCell;
