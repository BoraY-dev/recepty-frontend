import React from "react";
import { useParams, Link } from "react-router-dom";
import { recipes } from "../data/recipes";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
      <p>Preparation time: {recipe.prepTime} min</p>
      <p>Servings: {recipe.servings}</p>
      <Link to="/recipes">Back to recipes list</Link>
    </div>
  );
}
