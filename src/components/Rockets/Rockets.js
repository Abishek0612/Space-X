import axios from "axios";
import { useEffect, useState } from "react";
import "./rockets.scss";

function Rockets() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://api.spacexdata.com/v3/launches`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="main__rockets">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name..."
      />
      <div className="container">
        {isLoading ? (
          <h1
            style={{
              display: "flex",
              color: "white",
              justifyContent: "center",
            }}
          >
            Loading...
          </h1>
        ) : (
          data
            .filter((item) =>
              item.mission_name.toLowerCase().includes(search.toLowerCase())
            )

            .map((item) => (
              <div className="content" key={item.flight_number}>
                <img
                  className="rockets-img"
                  src={item.links.mission_patch_small}
                  alt={item.mission_name}
                />

                <h2>NAME : {`${item.mission_name}`}</h2>
                <h6>LAUNCH DATE : {`${item.launch_date_utc}`}</h6>
                <h6>LAUNCH YEAR : {`${item.launch_year}`}</h6>
                <p>ROCKET TYPE : {`${item.rocket.rocket_type}`}</p>
              </div>
            ))
        )}
      </div>
    </div>
  );
}

export default Rockets;
