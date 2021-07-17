import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Main from "./components/main";
import Home from "./components/home";
import Crosswords from "./components/crosswords";
import Sudoku from "./components/sudoku";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/games">
          <Home />
        </Route>
        <Route path="/games/sudoku">
          <Sudoku />
        </Route>
        <Route path="/games/crosswords">
          <Crosswords />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
