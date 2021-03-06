import React from "react";

const LibrarySong = ({
  song,
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  setSongs,
  setIsPlaying,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);

    const newSongs = songs.map((songTemp) => {
      if (songTemp === song) {
        return { ...songTemp, active: true };
      } else {
        return { ...songTemp, active: false };
      }
    });

    setSongs(newSongs);

    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
