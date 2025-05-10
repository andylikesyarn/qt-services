import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import GetInvolved from "./pages/GetInvolved";
import About from "./pages/About";
import logo from "../public/assets/images/gatoronly_darkmode.svg";

function App() {
  /*return (
    <div className="h4" style={{ fontWeight: "bold" }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="logo"
              style={{ height: "3rem" }}
              className="img-fluid"
            />
            <span className="h3">QTs</span>
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-1">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-1" to="/get-involved">
                  Get Involved
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" to="/donate">
                  Donate
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-1" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">

  );*/
  return (
    <nav className="fixed-top">
      <>
        <Link className="nav-link mx-1" to="/">
          <span className="display-1" style={{ paddingTop: "4rem" }}>
            SITE IN PROGRESS
          </span>
        </Link>{" "}
        <Link to="/about"></Link>
        <Link className="nav-link mx-1" to="/contact"></Link>{" "}
        <Link className="nav-link mx-1" to="/get-involved"></Link>{" "}
        <Link className="nav-link mx-1" to="/donate"></Link>{" "}
        <Link to="/contact"></Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </nav>
  );
}

export default App;
