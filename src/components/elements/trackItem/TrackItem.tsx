import type { ITrack } from '@/types/track.types';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { Ellipsis, Heart } from 'lucide-react';

dayjs.extend(duration);

interface Props {
  track: ITrack;
}

export function TrackItem({ track }: Props) {
  const formattedDuration = dayjs.duration(track.duration, 'seconds').format('m:ss');

  return (
    <div className="flex items-center justify-between border-b border-player-bg/70 py-6 last:border-0">
      <div className="flex items-center gap-3">
        <div className="size-12 bg-white/30 border border-primary rounded-full" />
        <div>
          <div className="text-white text-lg font-medium">{track.name}</div>
          <div className="opacity-60">{formattedDuration}</div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="group"
          aria-label="Like"
        >
          <Heart className="text-primary opacity-80 duration-300 hover:opacity-100 " />
        </button>
        <button
          type="button"
          aria-label="More options"
        >
          <Ellipsis className="opacity-30 duration-300 hover:opacity-100" />
        </button>
      </div>
    </div>
  );
}
