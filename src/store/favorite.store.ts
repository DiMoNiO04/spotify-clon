import { makeAutoObservable } from 'mobx';

class FavoriteStore {
  favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  constructor() {
    makeAutoObservable(this);
  }

  toggleFavorite(trackId: number) {
    if (this.favorites.includes(trackId)) {
      this.favorites = this.favorites.filter((id) => id !== trackId);
    } else {
      this.favorites.push(trackId);
    }

    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}

export const favoriteStore = new FavoriteStore();
