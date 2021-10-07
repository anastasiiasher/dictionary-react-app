import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
  function load(){
      setLoaded(true);
      search();
  }
  if (loaded) {
  return (
    <div className="dictionary container">
      <section>
        <header className="App-header">
          <h3 className="upperSide mt-2 mb-4"> Hello  👋  What word do you want to look up?</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type a word..."
              autoFocus="on"
              onChange={handleKeywordChange}
            />
            <input type="submit" value="🔎" />
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
    </div>
  );
  }
  else {
      load();
      return "Loading...";
  }
}
