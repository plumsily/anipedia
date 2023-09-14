import ListView from "./components/ListView";
import lunr from "lunr";
import animeData from "../public/lunr-index.json";

// export async function getStaticProps() {
//   console.log("getStaticProps is running");
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
//   console.log("Index created:", index);

//   return {
//     props: {
//       lunrIndex: JSON.stringify(index), // Pass the index to your component as a prop
//     },
//   };
// }

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-20">
      <h1 className="text-4xl drop-shadow-[0_0px_10px_rgba(158,102,255,1)]">
        Anipedia
      </h1>
      <p className="text-center">
        Discover your next favorite anime with Anipedia—the one-stop directory
        for all things anime. From iconic series to hidden gems, we make finding
        your next binge-worthy show a breeze!
      </p>
      <div className="flex flex-col items-center gap-4">
        <ListView />
      </div>
    </main>
  );
}
