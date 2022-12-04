import React from "react";

export default function Avatar({ image, isNew }) {
  return (
    <div className="avatar">
      <img className="photo" src={image} alt="developer" />
      {isNew && <span className="new">new</span>}
    </div>
  );
}
