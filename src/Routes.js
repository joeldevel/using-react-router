import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import Navbar from "./Navbar";
import Forum from "./Forum";
import Post from './Post';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/forum" component={Forum} />
        <Route path="/forum/:id" component={Post}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
