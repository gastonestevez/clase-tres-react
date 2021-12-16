import UserList from './UserList'
import About from './About'
import NotFound from './NotFound'
import Marketplace from './Marketplace'
import Navbar from './Navbar/Navbar'
import UserDetail from './UserDetail/'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const API_URL = 'https://reqres.in/api/users'

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Switch>
              <Route exact path="/">
                <UserList apiUrl={API_URL} />
              </Route>
              <Route exact path="/marketplace">
                <Marketplace />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/detail/:userId">
                <UserDetail apiUrl={API_URL} />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
