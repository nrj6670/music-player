import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  setIsPlaying,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "open-library" : ""}`}>
      <h2>Library</h2>
      <div className="Library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            setCurrentSong={setCurrentSong}
            songs={songs}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
            setIsPlaying={setIsPlaying}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
