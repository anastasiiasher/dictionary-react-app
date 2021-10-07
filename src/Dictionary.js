import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handlePexel(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    const pexelApiKey =
      "563492ad6f91700001000001172c0b9b332b4d9ab68fb5a51db46059";
    let pexelUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelApiKey}` };
    axios.get(pexelUrl, { headers: headers }).then(handlePexel);
  }
  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="dictionary container">
        <section>
          <header className="App-header">
            <h3 className="upperSide mt-2 mb-4">
              {" "}
              Hello 👋 What word do you want to look up?
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a word..."
                    autoFocus="on"
                    onChange={handleKeywordChange}
                    className="type"
                  />
                </div>
                <div className="col-3">
                  <input type="submit" className="magn" value="🔎" />
                </div>
              </div>
            </form>
            <p className="example mt-3">
              {" "}
              suggested words:{" "}
              <cursive> book, moon, nature, coffee, vegan, etc.</cursive>{" "}
            </p>
          </header>
          <hr />
        </section>
        <Results results={results} />
        <Photos photos={photos} keyword={keyword} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
