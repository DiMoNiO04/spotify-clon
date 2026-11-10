import { TRACKS } from '@/data/tracks.data';
import { makeAutoObservable } from 'mobx';
import type { ITrack } from './../types/track.types';

class MusicPlayerStore {
  isPlaying: boolean = false;
  currentTrack: ITrack | null = TRACKS[1];
  volume: number = 80;
  currentTime: number = 0;
  progress: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setTrack(track: ITrack | null) {
    this.currentTrack = track;
  }

  togglePlayPause() {
    this.isPlaying = !this.isPlaying;
  }

  seek(time: number) {
    this.currentTime = time;
    this.progress = (time / (this.currentTrack?.duration || 1)) * 100;
  }

  setVolume(volume: number) {
    this.volume = volume;
  }

  changeTrack(type: 'prev' | 'next') {
    if (!this.currentTrack) return;

    const currentIndex = TRACKS.findIndex((track) => track.name === this.currentTrack?.name);

    const newIndex =
      type === 'prev'
        ? (currentIndex - 1 + TRACKS.length) % TRACKS.length
        : (currentIndex + 1) % TRACKS.length;

    this.setTrack(TRACKS[newIndex]);
    this.currentTime = 0;
    this.progress = 0;
  }
}

export const playerStore = new MusicPlayerStore();
