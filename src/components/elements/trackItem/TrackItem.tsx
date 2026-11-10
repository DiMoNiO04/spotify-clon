import { TrackInfo } from '@/components/ui/trackInfo/TrackInfo';
import { favoriteStore } from '@/store/favorite.store';
import type { ITrack } from '@/types/track.types';
import { transformDuration } from '@/utils/transform-duration';

import { Ellipsis, Heart } from 'lucide-react';

interface Props {
  track: ITrack;
}

export function TrackItem({ track }: Props) {
  return (
    <div className="flex items-center justify-between border-b border-player-bg/70 py-6 last:border-0">
      <TrackInfo
        title={track.name}
        subTitle={transformDuration(track.duration)}
        image={track.cover}
        track={track}
      />

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="group"
          aria-label="Like"
          onClick={() => {
            favoriteStore.toggleFavorite(track.id);
          }}
        >
          <Heart
            fill={favoriteStore.favorites.includes(track.id) ? 'var(--color-primary)' : 'none'}
            className="text-primary opacity-80 duration-300 hover:opacity-100 "
          />
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
