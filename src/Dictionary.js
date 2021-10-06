import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="dictionary container">
      <header className="App-header">
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Type a word..."
            autoFocus="on"
            onChange={handleKeywordChange}
          />
          <input type="submit" value="Search" />
        </form>
      </header>
      <Results results={results} />
    </div>
  );
}
