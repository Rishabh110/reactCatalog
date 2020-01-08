import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Cards from "./Cards";
import CardFull from "./cardFull";
import ButtonAppBar from "./ButtonAppBar";

const App: React.FC = () => {
  return (
    <>
      <ButtonAppBar />
      <Router>
        <div className="App" style={{ marginTop: "100px" }}>
          <Switch>
            <Route exact path="/">
              <div>
                <Link to="/products">
                  <button>Products</button>
                </Link>
              </div>
            </Route>
            <Route path="/products">
              <Cards />
            </Route>
            <Route path="/details/:productId" component={CardFull} />
          </Switch>
        </div>
      </Router>
    </>
  );
};
export default App;
