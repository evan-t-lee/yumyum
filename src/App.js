import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Main from "./components/main";
import Crosswords from "./components/crosswords";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/crosswords">
          <Crosswords />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
