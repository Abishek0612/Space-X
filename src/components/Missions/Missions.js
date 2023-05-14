import { useEffect, useState } from "react";
import axios from "axios";
import "./missions.scss";

function Missions() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://api.spacexdata.com/v3/missions`
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

      <div className="mission-container">
        {isLoading ? (
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            Loading...
          </h1>
        ) : (
          data
            .filter((item) =>
              item.mission_name.toLowerCase().includes(search.toLowerCase())
            )

            .map((item) => (
              <div className="mission-content" key={item.mission_id}>
                <h2> NAME : {`${item.mission_name}`} </h2>
                <h6>ID:{`${item.mission_id}`}</h6>
                <h6>URL:{`${item.website}`}</h6>
              </div>
            ))
        )}
      </div>
    </main>
  );
}

export default Missions;
