import Login from "./Features/Authentication/login";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TheSidebar from "./Features/Sidebar/TheSidebar";
import "./scss/style.scss";
import TheHeader from "./Features/NavigationBar/TheHeader";
import ViewBugPage from "./Features/Bugs/bugView/viewBugs";
import SpecificBug from "./Features/Bugs/bugView/viewBugs";

function App() {
  const { auth } = useSelector((state) => state);
  return (
    <Router>
      {!auth.loggedIn ? (
        <Login />
      ) : (
        <>
          <TheSidebar />
          <TheHeader />
          <main>
            <Switch>
              <Route path="/viewbugs">
                <ViewBugPage />
              </Route>
              <Route path="/viewbugs:id">
                <SpecificBug />
              </Route>
            </Switch>
          </main>
        </>
      )}
    </Router>
  );
}

export default App;
