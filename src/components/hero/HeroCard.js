import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="row">
      <div className="card-deck">
        <div className="card mx-2 my-2" key={id}>
          <img
            className="card-img-top img-thumbnail"
            src={`./assets/heroes/${id}.jpg`}
            alt={superhero}
            style={{ width: "400px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <small>{publisher}</small>
            <p className="card-text">{alter_ego}</p>
            <p className="card-text">{first_appearance}</p>
            <p className="card-text">
              {characters.length > 4 ? null : characters}
            </p>
          </div>
          <Link to={`./heroe/${id}`} className="btn btn-primary">
            Mas...
          </Link>
        </div>
      </div>
    </div>
  );
};
