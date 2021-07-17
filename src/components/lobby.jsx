import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "20%",
  },
  field: {
    margin: "7px",
  },
  heading: {
    textAlign: "center", 
  }
});

const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
  connecting,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h2 className={classes.heading}>Enter a Room</h2>
        <TextField
          className={classes.field}
          id="field"
          value={username}
          onChange={handleUsernameChange}
          readOnly={connecting}
          label="Username"
          variant="outlined"
          required
        />

        <TextField
          className={classes.field}
          id="room"
          value={roomName}
          onChange={handleRoomNameChange}
          label="Room Name"
          variant="outlined"
          readOnly={connecting}
          required
        />

        <Button className={classes.field} variant="contained" color="primary" type="submit" disabled={connecting}>
          {connecting ? "Connecting" : "Join"}
        </Button>
      </form>
    </div>
  );
};

export default Lobby;
