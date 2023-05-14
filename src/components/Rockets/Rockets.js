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
    <main>
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
    </main>
  );
}

export default Rockets;

/* .launch{
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
    margin-top: 100px;
} */

/* .launch-content{
    margin: 20px;
    width: 300px;
    text-align: center;
    border: 1px solid rgb(127, 99, 99);
    border-radius: 5px;
    height: 20%;

} */
/* 
.launch-content:hover{
    background-color: blue;
    border-radius: 5px;
    color: white;
} */

/* .launch-img{
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
} */
