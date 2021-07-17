import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Login from "./components/login";
import Home from "./components/home";
import Profile from "./components/profile";
import Crosswords from "./components/crosswords";
import Sudoku from "./components/sudoku";
import VideoChat from "./components/videochat";

function App() {
  return (
    <Router>
      <Switch>
        <Route path ="/login">
          <Login />
        </Route>
        <Route path="/home/sudoku">
          <Sudoku />
        </Route>
        <Route path="/home/crosswords">
          <Crosswords />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/video">
          <VideoChat />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
