import React from "react";
import { Link } from "react-router-dom";
import { recipes } from "../data/recipes";

export default function Recipes() {
  return (
    <div>
      <h1>Recipes List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link> - {recipe.description}
          </li>
        ))}
      </ul>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}
