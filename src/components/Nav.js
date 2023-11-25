import './Nav.scss';
import {Link} from "react-router-dom";
import { durl } from '../config';

const Nav = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg custom">
        <div className="container-fluid">
          <a className="navbar-brand aa" href={durl}>
            Heath Care
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link " aria-current="page">
                  Disease Predictor
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/symptomPrediction" className="nav-link ">
                   Symptoms Predictor 
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href={durl+"/doctors"}>
                  Doctors
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href={durl+"/about"}>
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
