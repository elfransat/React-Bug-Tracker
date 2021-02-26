import Login from "./Views/Login/login";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import TheSidebar from "./Views/Sidebar/TheSidebar";
import "./scss/style.scss";
import TheHeader from "./Views/NavigationBar/TheHeader";

function App() {
  const { auth } = useSelector((state) => state);
  return (
    <Router>
      {!auth.loggedIn ? (
        <Login />
      ) : (
        <>
          <TheHeader />
          <TheSidebar />
        </>
      )}
    </Router>
  );
}

export default App;
