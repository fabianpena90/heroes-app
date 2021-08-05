import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroeByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
const queryString = require("query-string");

export const Search = ({ history }) => {
  const localtion = useLocation();
  const { q = "" } = queryString.parse(localtion.search);
  const [formValues, handleInputChange, reset] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;
  const heroesFilter = useMemo(() => getHeroeByName(q), [q]);

  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
    reset();
  };
  return (
    <div>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={onSubmit}>
            <input
              onChange={handleInputChange}
              value={searchText}
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
            />
            <button type="submit" className="btn btn-secondary mt-4">
              Search
            </button>
          </form>
        </div>
        <div className=" col-7">
          <h4>Results</h4>
          <hr />
          {q !== "" && heroesFilter.length === 0 && (
            <div className="alert alert-danger">
              There is not a heroe by the name of {q}
            </div>
          )}
          {q === "" && (
            <div className="alert alert-info" role="alert">
              Search for a Heroe
            </div>
          )}
          {heroesFilter.map((heroe) => (
            <HeroCard key={heroe.id} {...heroe} />
          ))}
        </div>
      </div>
    </div>
  );
};
