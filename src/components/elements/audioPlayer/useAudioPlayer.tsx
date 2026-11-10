import { playerStore } from '@/store/store';
import { useRef } from 'react';

export const useAudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    playerStore.togglePlayPause();

    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const onSeek = (time: number) => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = time;
    playerStore.seek(time);
  };

  const changeTrack = (type: 'prev' | 'next') => {
    playerStore.changeTrack(type);

    if (audioRef.current && playerStore.isPlaying) {
      audioRef.current.play();
    }
  };

  const setVolume = (volume: number) => {
    if (!audioRef.current) return;

    audioRef.current.volume = volume / 100;
    playerStore.setVolume(volume);
  };

  return { audioRef, togglePlayPause, onSeek, changeTrack, setVolume };
};
