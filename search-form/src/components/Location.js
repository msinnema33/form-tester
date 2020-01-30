import React, { useEffect, useState } from "react";
import axios from "axios";
  
  export default function Location() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
      axios
        //.get('https://rickandmortyapi.com/api/location/')
        .then(response => {
        //  console.log(response.data.results)
        //   const locations = response.data.results.filter(
        //     location =>
        //       location.name
        //         .toLowerCase()
        //         .includes(query.toLowerCase())
        //   );
        //   console.log("rick and morty locations", response);
        //  setData(locations);
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
              <div className="character-list " key={data.id}>
                <h3 className="capital">
                  Name:  {data.name}
                </h3>
                <h3 className="capital">
                  Dimension: {data.dimension}
                </h3>
                <h3 className="capital">
                  Type: {data.type}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }