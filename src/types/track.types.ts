import type { IArtist } from './artists.types';

export interface ITrack {
  id: number;
  name: string;
  file: string;
  cover: string;
  artist: IArtist;
  duration: number;
}
