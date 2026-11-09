import { ProgressBar } from '@/components/ui/progressBar/ProgressBar';
import { TrackInfo } from '@/components/ui/trackInfo/TrackInfo';
import { musicPlayerStore } from '@/store/store';
import { Pause, Play, SkipBack, SkipForward, Volume, Volume1, Volume2 } from 'lucide-react';

export function AudioPlayer() {
  if (!musicPlayerStore.currentTrack) return null;

  return (
    <div className="grid grid-cols-[1fr_5fr] w-full py-5 px-10 bg-player-bg border-t border-white/10 fixed bottom-0 left-0">
      <TrackInfo
        title={musicPlayerStore.currentTrack?.name}
        subTitle={musicPlayerStore.currentTrack?.artist.name}
        image={undefined}
      />

      <div className="grid grid-cols-[1fr_8fr_2fr] gap-8 items-center">
        <div className="flex items-center gap-2.5">
          <button className="opacity-80 hover:opacity-100 duration-300">
            <SkipBack size={20} />
          </button>

          <button
            className="
              rounded-full bg-gradient-to-r from-[#3C3D41] to-[#444549] p-3.5 
              border border-white/10 border-solid text-primary
              duration-300 hover:shadow hover:scale-105  group will-change-transform transition-transform
            "
          >
            {musicPlayerStore.isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          <button>
            <SkipForward size={20} />
          </button>
        </div>

        <ProgressBar
          currentValue={musicPlayerStore.currentTime}
          value={musicPlayerStore.currentTrack.duration}
          progress={musicPlayerStore.progress}
          onSeek={(time: number) => musicPlayerStore.seek(time)}
          isTextDisplayed
          isThumbDisplayed
        />

        <div className="px-2 max-w-36 w-full grid grid-cols-[1fr_8fr] gap-3 items-center">
          {musicPlayerStore.volume === 0 ? (
            <Volume />
          ) : musicPlayerStore.volume < 50 ? (
            <Volume1 />
          ) : (
            <Volume2 />
          )}

          <ProgressBar
            currentValue={musicPlayerStore.volume}
            value={100}
            progress={musicPlayerStore.volume}
            onSeek={(value: number) => musicPlayerStore.setVolume(value)}
          />
        </div>
      </div>
    </div>
  );
}
