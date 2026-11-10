import { playerStore } from '@/store/player.store';
import type { ITrack } from '@/types/track.types';
import cn from 'clsx';
import { Pause, Play } from 'lucide-react';
import { CircularProgressbar } from 'react-circular-progressbar';

interface Props {
  image: string;
  title: string;
  subTitle: string;
  track?: ITrack;
}

export function TrackInfo({ title, subTitle, image, track }: Props) {
  const isActive = playerStore.currentTrack?.name === track?.name;

  const handleImageClick = () => {
    if (!track) return;
    if (!isActive) {
      playerStore.setTrack(track);
    }
    playerStore.togglePlayPause();
  };

  const handleTitleClick = () => {
    if (!track || isActive) return;
    playerStore.setTrack(track);
    playerStore.play();
  };

  return (
    <div className="flex items-center gap-3">
      {track ? (
        <button
          type="button"
          onClick={handleImageClick}
          aria-label={isActive && playerStore.isPlaying ? 'Пауза' : 'Воспроизвести'}
          className="relative block group"
        >
          {isActive && (
            <CircularProgressbar
              value={playerStore.progress}
              className="absolute"
              strokeWidth={6}
              styles={{
                trail: { stroke: '#2e3235' },
                path: {
                  stroke: 'var(--color-primary)',
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                },
              }}
            />
          )}

          <span
            className={cn(
              'absolute inset-0 flex items-center justify-center group-hover:opacity-100',
              isActive ? 'opacity-100' : 'opacity-0 duration-300',
            )}
          >
            {isActive && playerStore.isPlaying ? <Pause /> : <Play />}
          </span>

          <img
            src={image}
            alt={title}
            className="size-14 rounded-full object-cover"
          />
        </button>
      ) : (
        <img
          src={image}
          alt={title}
          className="size-14 rounded-full object-cover m-2"
        />
      )}

      <div>
        <div className="text-white text-lg font-medium">
          {track ? (
            <button
              type="button"
              onClick={handleTitleClick}
              className="hover:underline"
            >
              {title}
            </button>
          ) : (
            title
          )}
        </div>
        <div className="opacity-60">{subTitle}</div>
      </div>
    </div>
  );
}
