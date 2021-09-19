import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import Navbar from "./Navbar";
import Forum from "./Forum";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/forum" component={Forum} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
