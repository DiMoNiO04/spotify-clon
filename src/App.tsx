import { Play } from 'lucide-react';
import { SearchField } from './components/elements/searchField/SearchField';
import { TrackItem } from './components/elements/trackItem/TrackItem';
import { TRACKS } from './data/tracks.data';

function App() {
  return (
    <div>
      <SearchField />
      <div className="relative">
        <img
          src="/banner.jpg"
          alt=""
          className="rounded-xl"
        />
        <div className="flex items-center justify-between absolute bottom-layout left-0 px-4 w-full">
          <div>
            <h1 className="text-2xl font-semibold mb-1 text-white">Daft Punk</h1>
            <h2 className="text-primary font-medium">6.8m listeners</h2>
          </div>

          <button
            className="
              rounded-full bg-gradient-to-r from-[#2F3034] to-[#1F2026] p-5 border border-player-bg 
              border-solid duration-300 hover:translate-y-[-2px] hover:shadow
            "
          >
            <Play
              className="text-primary"
              fill="var(--color-primary)"
            />
          </button>
        </div>
      </div>

      <div>
        {TRACKS.map((track) => (
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
