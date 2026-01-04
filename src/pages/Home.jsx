import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Cookbook</h1>
      <p>
        <Link to="/recipes">Go to Recipes List</Link>
      </p>
    </div>
  );
}
