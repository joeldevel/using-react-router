import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import Forum from './Forum';

const Routes = () => {
  return (
    <BrowserRouter>
    	<>
    	<nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/forum">Forum</Link>
            </li>
          </ul>
        </nav>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/forum" component={Forum}/>
      </Switch>
      </>
    </BrowserRouter>
  );
};

export default Routes;