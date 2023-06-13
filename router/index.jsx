
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import App from '../src/App';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route component={App} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
