import React, { useEffect, useState } from "react";
import axios from "axios";
  
  export default function Episode() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
      axios
        //.get('https://rickandmortyapi.com/api/episode/')
        .then(response => {
        //   console.log(response.data.results)
        //   const episodes = response.data.results.filter(
        //     episode =>
        //       episode.name
        //         .toLowerCase()
        //         .includes(query.toLowerCase())
        //   );
        //   console.log(episodes);
        //   console.log("rick and morty episodes", response);
        //   setData(episodes);
        //   console.log('this is the ', data);
        });
    }, [query]);
    
    const handleInputChange = event => {
      setQuery(event.target.value);
    };
    return (
      <div className="spells">
        <form className="search">
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            className="prompt search-name"
            placeholder="search by name"
            autoComplete="off"
          />
        </form>
        <div className="spell">
          {data.map(data => {
            return (
              <div className="character-list" key={data.id}>
                <h3 className="capital">
                  Name:  {data.name}
                </h3>
                <h3 className="capital">
                  Air Date: {data.air_date}
                </h3>
                <h3 className="capital">
                  Episode: {data.episode}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }