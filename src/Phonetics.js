import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <bold>/ {props.phonetics.text} /</bold>
      <br />
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        {" "}
        Play 🔊
      </a>
      <br />
    </div>
  );
}
