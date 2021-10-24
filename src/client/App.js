import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import "../index.scss";
import Navbar from "./Navbar";
import Home from "./Home";
import Learn from "./Learn";
import Footer from "./Footer";

function IsLearn() {
  const location = useLocation()
  if (location.pathname !== "/learn")
    return <Footer />
  return null
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/video">Video</Route>
          <Route path="/learn">
            <Learn />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <IsLearn />
      </Router>
    </div>
  );
}

export default App;
