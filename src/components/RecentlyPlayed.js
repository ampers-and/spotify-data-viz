import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import SongCard from "./SongCard";
import { RecentGenreViz } from "./RecentGenreViz";

const RecentlyPlayed = ({ user, accessToken, refreshToken }) => {
  console.log(
    "user",
    user,
    accessToken,
    "accessToken",
    refreshToken,
    "refreshToken"
  );
  const [recentSongs, setRecentSongs] = useState([]);
  useEffect(() => {
    const getRecentlyPlayed = () => {
      fetch("https://api.spotify.com/v1/me/player/recently-played", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
        .then(response => response.json())
        .then(data => setRecentSongs(data.items));
    };

    getRecentlyPlayed();
  }, [accessToken]);

  if (!recentSongs.length) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  } else {
    return (
      <>
        {/* <Grid container spacing={3}>
          {recentSongs &&
            recentSongs.map(song => {
              return (
                <Grid key={song.played_at} item xs={12} md={6} lg={3}>
                  <SongCard song={song} />
                </Grid>
              );
            })}
        </Grid> */}
        {recentSongs && (
          <RecentGenreViz recentSongs={recentSongs} accessToken={accessToken} />
        )}
      </>
    );
  }
};

export default RecentlyPlayed;
