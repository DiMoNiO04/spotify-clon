import { Pause, Play } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { useMemo } from 'react';
import { SearchField } from './components/elements/searchField/SearchField';
import { TrackItem } from './components/elements/trackItem/TrackItem';
import { TRACKS } from './data/tracks.data';
import { playerStore } from './store/player.store';

function App() {
  const [searchTerm, setSearchTerm] = useQueryState('searchTerm');

  const filteredTrack = useMemo(() => {
    if (!searchTerm) return TRACKS;

    return TRACKS.filter((track) => track.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm]);

  const { currentTrack } = playerStore;

  return (
    <div>
      <SearchField
        value={searchTerm || ''}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="relative w-full h-[56vh]">
        <img
          src={currentTrack?.cover}
          alt={currentTrack?.name}
          className="rounded-xl w-full h-full object-cover"
        />
        <div className="flex items-center justify-between absolute bottom-layout left-0 px-4 w-full">
          <div>
            <h1 className="text-2xl font-semibold mb-1 text-white">{currentTrack?.name}</h1>
            <h2 className="text-primary font-medium">
              {currentTrack?.artist.listenersCount} listeners
            </h2>
          </div>

          <button
            className="
              rounded-full bg-gradient-to-r from-[#2F3034] to-[#1F2026] p-5 border border-player-bg 
              border-solid duration-300 hover:scale-105
            "
            onClick={() => playerStore.togglePlayPause()}
          >
            {playerStore.isPlaying ? (
              <Pause
                className="text-primary"
                fill="var(--color-primary)"
              />
            ) : (
              <Play
                className="text-primary"
                fill="var(--color-primary)"
              />
            )}
          </button>
        </div>
      </div>

      <div>
        {filteredTrack.map((track) => (
          <TrackItem
            track={track}
            key={track.name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
