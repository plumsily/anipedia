"use client";
import lunr, { Index } from "lunr";
import React, { useState, useEffect } from "react";
import CycleSpans from "./CycleSpans";
import animeData from "../../public/lunr-index.json";
import List from "./List";

// export async function getStaticProps() {
//   const index = lunr(function () {
//     this.ref("id");
//     this.field("title");
//     this.field("synopsis");
//     this.field("genre");
//     this.field("mainCharacters");
//     this.field("wikipediaLink");

//     animeData.anime.forEach((doc) => {
//       this.add(doc);
//     });
//   });

//   return {
//     props: {
//       lunrIndex: JSON.stringify(index), // Pass the index to your component as a prop
//     },
//   };
// }

export interface Anime {
  id: number;
  title: string;
  synopsis: string;
  genre: string;
  mainCharacters: string[];
  wikipediaLink: string;
}

const ListView = () => {
  const [search, setSearch] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [index, setIndex] = useState<Index | null>(null);
  const [results, setResults] = useState<(Anime | undefined)[]>([
    {
      id: 0,
      title: "",
      synopsis: "",
      genre: "",
      mainCharacters: [""],
      wikipediaLink: "",
    },
  ]);

  //   useEffect(() => {
  //     console.log(lunrIndex);
  //     if (lunrIndex) {
  //       setIndex(lunr.Index.load(JSON.parse(lunrIndex))); // Deserialize and load the index
  //     }
  //   }, [lunrIndex]);

  function handleSearch(): void {
    if (index) {
      const results = index.search(search);

      setIsSearched(true);
      console.log(results);
      const fullDataObjects = results.map((result) => {
        const id = result.ref;

        // Use the ID to find the full data object
        // This assumes animeData is an object with a property "anime" that's an array
        return animeData.anime.find((doc) => doc.id === Number(id));
      });

      setResults(fullDataObjects);
    }
  }

  useEffect(() => {
    const staticIndex = lunr(function () {
      this.ref("id");
      this.field("title");
      this.field("synopsis");
      this.field("genre");
      this.field("mainCharacters");
      this.field("wikipediaLink");

      animeData.anime.forEach((doc) => {
        this.add(doc);
      });
    });
    setIndex(staticIndex);
  }, []);

  return (
    <>
      <div className="flex flex-row gap-2">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      <CycleSpans />
      {isSearched && <List results={results} />}
    </>
  );
};

export default ListView;
