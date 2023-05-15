import React from "react";
import "./homepage.css";
import earth from "../../assets/images/earth.png";
import Typical from "react-typical";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="background-container">
      <div className="earth">
        <img className="earth-img" src={earth} alt="earth" />
        <div className="buttons">
          <Link className="link" to="/history">
            <Button variant="primary">History</Button>
          </Link>
          <Link to="/missions">
            <Button className="link" variant="primary">
              Missions{" "}
            </Button>
          </Link>
        </div>

        <div className="content">
          <h1>
            Welcome to
            <Typical
              loop={Infinity}
              steps={[" the Space~X ", 2000, "the Largest Space Station", 2000]}
            />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
