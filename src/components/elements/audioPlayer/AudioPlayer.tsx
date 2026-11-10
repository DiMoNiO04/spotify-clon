import { ProgressBar } from '@/components/ui/progressBar/ProgressBar';
import { TrackInfo } from '@/components/ui/trackInfo/TrackInfo';
import { playerStore } from '@/store/player.store';
import { Pause, Play, SkipBack, SkipForward, Volume, Volume1, Volume2 } from 'lucide-react';
import { useAudioPlayer } from './useAudioPlayer';

export function AudioPlayer() {
  const { audioRef, changeTrack, onSeek, setVolume, togglePlayPause } = useAudioPlayer();

  if (!playerStore.currentTrack) return null;

  return (
    <div className="grid grid-cols-[1fr_5fr] w-full py-5 px-10 bg-player-bg border-t border-white/10 fixed bottom-0 left-0">
      <TrackInfo
        title={playerStore.currentTrack?.name}
        subTitle={playerStore.currentTrack?.artist.name}
        image={playerStore.currentTrack.cover}
      />

      <audio
        ref={audioRef}
        src={playerStore.currentTrack.file}
        onTimeUpdate={(e) => {
          const currentTime = Math.floor(e.currentTarget.currentTime);
          playerStore.seek(currentTime);
        }}
        onEnded={() => (playerStore.isPlaying = false)}
      />

      <div className="grid grid-cols-[1fr_8fr_2fr] gap-8 items-center">
        <div className="flex items-center gap-2.5">
          <button
            className="opacity-80 hover:opacity-100 duration-300"
            onClick={() => changeTrack('prev')}
          >
            <SkipBack size={20} />
          </button>

          <button
            className="
              rounded-full bg-gradient-to-r from-[#3C3D41] to-[#444549] p-3.5 
              border border-white/10 border-solid text-primary
              duration-300 hover:shadow hover:scale-105  group will-change-transform transition-transform
            "
            onClick={togglePlayPause}
          >
            {playerStore.isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          <button onClick={() => changeTrack('next')}>
            <SkipForward size={20} />
          </button>
        </div>

        <ProgressBar
          currentValue={playerStore.currentTime}
          value={playerStore.currentTrack.duration}
          progress={playerStore.progress}
          onSeek={(time: number) => onSeek(time)}
          isTextDisplayed
          isThumbDisplayed
        />

        <div className="px-2 max-w-36 w-full grid grid-cols-[1fr_8fr] gap-3 items-center">
          {playerStore.volume === 0 ? (
            <Volume />
          ) : playerStore.volume < 50 ? (
            <Volume1 />
          ) : (
            <Volume2 />
          )}

          <ProgressBar
            currentValue={playerStore.volume}
            value={100}
            progress={playerStore.volume}
            onSeek={(value: number) => setVolume(value)}
          />
        </div>
      </div>
    </div>
  );
}
