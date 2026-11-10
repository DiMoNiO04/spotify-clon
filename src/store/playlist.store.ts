import { makeAutoObservable } from 'mobx/src/internal.js';

class PlaylistStore {
  playlists: { name: string; tracks: number[] }[] = JSON.parse(
    localStorage.getItem('playlists') || '[]',
  );

  constructor() {
    makeAutoObservable(this);
  }

  private saveToLocaleStorage() {
    localStorage.setItem('playlists', JSON.stringify(this.playlists));
  }

  createPlaylist(name: string) {
    if (this.playlists.find((playlist) => playlist.name === name)) return;
    this.playlists.push({ name, tracks: [] });

    this.saveToLocaleStorage();
  }

  addToPlaylist(playlistName: string, trackId: number) {
    const playlist = this.playlists.find((p) => p.name === playlistName);
    if (!playlist || playlist.tracks.includes(trackId)) return;
    playlist.tracks.push(trackId);

    this.saveToLocaleStorage();
  }

  removeFromPlaylist(playlistName: string, trackId: number) {
    const playlist = this.playlists.find((p) => p.name === playlistName);
    if (!playlist) return;
    playlist.tracks = playlist.tracks.filter((id) => id !== trackId);

    this.saveToLocaleStorage();
  }
}

export const playlistStore = new PlaylistStore();
