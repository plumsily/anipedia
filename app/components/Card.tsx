import React, { useState, useEffect } from "react";
import animeData from "../../public/lunr-index.json";
import { Index } from "lunr";
import { Anime } from "./ListView";

const Card = ({ match }: { match: Anime }) => {
  return (
    <div className="bg-gray-300/20 py-2 px-4 flex flex-col gap-1 rounded-lg border border-gray-200/20">
      <h3 className="text-xl">{match.title}</h3>
      <p>{match.synopsis}</p>
      <p>{match.genre}</p>
      <p>{match.mainCharacters}</p>
      <span>{match.wikipediaLink}</span>
    </div>
  );
};

export default Card;
