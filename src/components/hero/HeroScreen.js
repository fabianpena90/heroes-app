import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroeById } from "../../selectors/getHeroeById";

export const HeroScreen = ({ history }) => {
  const { heroeId } = useParams();
  const heroe = useMemo(() => getHeroeById(heroeId), [heroeId]);

  if (!heroe) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    history.goBack();
  };

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    heroe;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          className="img-thumbnail img-fluid animate__bounceIn"
          alt={superhero}
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{alter_ego}</li>
          <li className="list-group-item">{publisher}</li>
          <li className="list-group-item">{first_appearance}</li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>

        <button onClick={handleReturn} className="btn btn-danger">
          Return
        </button>
      </div>
    </div>
  );
};
