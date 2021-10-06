import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`${keyword}`);
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
          <input type="submit" placeholder="Search" />
        </form>
      </header>
    </div>
  );
}
