import React, { useEffect, useState } from "react";
import axios from "axios";
  
  export default function Characters() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
        //   console.log(response.data.results)
          const characters = response.data.results.filter(
            character =>
              character.name
                .toLowerCase()
                .includes(query.toLowerCase())
          );
        //   console.log(characters);
        //   console.log("rick and morty characters", response);
          setData(characters);
        //   console.log('this is the ', data);
        });
    }, [query]);
    console.log('this is the ', data);
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
              <div
                className="character-list "
                key={data._id}
              >
                <h3 className="capital">
                  Name:  {data.name}
                </h3>
                <h3 className="capital">
                  Status: {data.status}
                </h3>
                <h3 className="capital">
                  Species: {data.species}
                </h3>
                <h3 className="capital">
                  Origin: {data.origin.name}
                </h3>
                <h3 className="capital">
                  More info: {data.url}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  