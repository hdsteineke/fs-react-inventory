import { useState, useEffect } from 'react';
import { getUser } from './services/fetch-utils';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Redirect,
} from 'react-router-dom';
import AuthPage from './AuthPage';
import CreatePage from './CreatePage';
import UpdatePage from './UpdatePage';
import ListPage from './ListPage';

import './App.css';
import { logout } from './services/fetch-utils';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = getUser();

    if (userData) {
      setUser(userData);
    }
  }, []);

  async function handleLogout() {
    await logout();

    setUser(null);
  }

  return (
    <Router>
      <div>
        <header>
          {user
            && <nav>
              <ul>
                <li>
                  <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink exact to="/create">Add a Deck</NavLink>
                </li>
              </ul>
              <button onClick={handleLogout}>Logout</button>
            </nav>
          }
        </header>
        <main>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              {user
                ? <Redirect to = '/tarot-decks' />
                : <AuthPage setUser={setUser} />
              }
            </Route>

            <Route exact path="/tarot-decks">
              {user
                ? <ListPage />
                : <AuthPage setUser={setUser} />
              }
            </Route>
            
            <Route exact path="/tarot-decks/:id">
              {user
                ? <UpdatePage />
                : <AuthPage setUser={setUser} />
              }
            </Route>

            <Route exact path="/create">
              {user
                ? <CreatePage />
                : <AuthPage setUser={setUser} />
              }
            </Route>

          </Switch>
        </main>
      </div>
    </Router>
  );
}
