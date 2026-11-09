import { TRACKS } from '@/data/tracks.data';
import type { ITrack } from '@/types/track.types';
import { makeAutoObservable } from 'mobx';

class MusicPlayerStore {
  isPlaying: boolean = false;
  currentTrack: ITrack | null = TRACKS[1];
  volume: number = 80;
  currentTime: number = 0;
  progress: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  play(track: ITrack) {
    this.currentTrack = track;
    this.isPlaying = true;
    console.log(`Playing track: ${track.name}`);
  }

  seek(time: number) {
    this.currentTime = time;
    this.progress = (time / (this.currentTrack?.duration || 1)) * 100;
  }

  setVolume(volume: number) {
    this.volume = volume;
  }
}

export const musicPlayerStore = new MusicPlayerStore();
