import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Main from "./components/main";
import Home from "./components/home";
import Profile from "./components/profile";
import Crosswords from "./components/crosswords";
import Sudoku from "./components/sudoku";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/games/sudoku">
          <Sudoku />
        </Route>
        <Route path="/games/crosswords">
          <Crosswords />
        </Route>
        <Route path="/games">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
