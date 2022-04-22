import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { Navbar, Product } from "./Components";
import { Home, Login, Products, Signup } from "./Pages";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/p/:id" component={Product} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
