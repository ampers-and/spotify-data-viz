/*
double axios call
first to recently played
response.items.track.artist  map  i => i.id
 get https://api.spotify.com/v1/artists?ids=
 query = array of string ids
 do query with artistIDs
*/
import React, { useState, useEffect } from "react";
import GenreGraph from "./GenreGraph";
import { PieBar } from "./PieBar";
import GenrePie from "./GenrePie";

export const RecentGenreViz = ({ recentSongs, accessToken }) => {
  const [artists, setArtists] = useState(null);

  const artistIDs = recentSongs
    .map((item) => item.track.artists.map((a) => a.id))
    .reduce(
      (accumulator, currentValue) => accumulator.concat(currentValue),
      []
    );

  useEffect(() => {
    const getArtistsById = () => {
      fetch(`https://api.spotify.com/v1/artists?ids=${artistIDs.join(",")}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setArtists(data.artists));
    };

    getArtistsById();
  }, [accessToken]);

  if (!artists) {
    return (
      <div>
        <h2>Loading..</h2>
      </div>
    );
  }

  /* Hash map, key value pairs - key = genre, value = number of times it shows up
  ideas - link to length of song - time spent listening to a certain genre
  */

  console.log(artists);

  //creating genres with artist names

  // const genres = artists.artists
  //   .map((artist) => artist.genres.map((genre, i) => genre))
  //   .reduce(
  //     (accumulator, currentValue) => accumulator.concat(currentValue),
  //     []
  //   );

  const genres = artists
    .map((artist) => artist.genres.map((genre, i) => genre))
    .reduce(
      (accumulator, currentValue) => accumulator.concat(currentValue),
      []
    );

  console.log("genres", genres);

  const genres2 = artists.map((artist) =>
    artist.genres.map((genre, i) => genre)
  );

  console.log("2", genres2);

  const genreArtists = {};

  console.log("artist length", artists.length);

  for (let i = 0; i < artists.length; i++) {
    let artist = artists[i];
    console.log("i", i, "artist", artists[i]);
    genreArtists[artist.name] = artist.genres.map((genre, i) => genre);
  }

  console.log("artists genres", genreArtists);

  const genresOccurrences = {};

  for (let genre of genres) {
    if (!genresOccurrences[genre]) {
      genresOccurrences[genre] = 1;
    } else {
      genresOccurrences[genre]++;
    }
  }

  console.log("genreOcc", genresOccurrences);

  return (
    <div>
      <h2>Genres</h2>
      {/* <GenreGraph data={genresOccurrences} /> */}
      {/* <PieBar data={genresOccurrences} /> */}
      <GenrePie data={genresOccurrences} artists={artists} />
    </div>
  );
};
