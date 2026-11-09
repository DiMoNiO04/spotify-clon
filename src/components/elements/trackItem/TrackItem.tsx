import type { ITrack } from '@/types/track.types';
import { Ellipsis, Heart } from 'lucide-react';

interface Props {
  track: ITrack;
}

export function TrackItem({ track }: Props) {
  return (
    <div className="border-b border-player-bg py-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="size-5 bg-primary rounded-full" />
        <div>
          <div className="text-white">{track.name}</div>
          <div>{track.duration}</div>
        </div>
      </div>

      <div>
        <button>
          <Heart className="text-primary hover:fill-primary" />
          <Ellipsis className="opacity-50" />
        </button>
      </div>
    </div>
  );
}
