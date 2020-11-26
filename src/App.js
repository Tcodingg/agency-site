import "./App.css";
import Header from "./Header";
import About from "./About";
import Services from "./Services";
import Home from "./Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Services" component={Services} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
