import React, { useState, useEffect } from "react";
import animeData from "../../public/lunr-index.json";
import { Index } from "lunr";
import { Anime } from "./ListView";
import Card from "./Card";

const List = ({ results }: { results: (Anime | undefined)[] }) => {
  return (
    results && (
      <div className="w-5/6">
        <ul className="flex flex-col gap-2">
          {results.map(
            (match) =>
              match && (
                <li key={match.id}>
                  <Card match={match} />
                </li>
              )
          )}
        </ul>
      </div>
    )
  );
};

export default List;
