import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Switch>
            <Route path="/rooms/:roomId">
              <Sidebar />
              <Chat />
            </Route>
            <Route path="/">
              <Sidebar />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
