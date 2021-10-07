import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-md-4 col-12">
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.medium}
                    alt="{props.keyword}"
                    className="img-fluid mx-auto"
                    key={index}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
