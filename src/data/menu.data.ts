import { PagesConfig } from '../config/pages.config';

export const MENU_ITEMS = [
  {
    name: 'Home',
    link: PagesConfig.HOME,
  },
  {
    name: 'Discover',
    link: PagesConfig.DISCOVER,
  },
  {
    name: 'Radio',
    link: PagesConfig.RADIO,
  },
];

export type TMenuItem = (typeof MENU_ITEMS)[number];

export const LIBRARY_MENU_ITEMS = [
  {
    name: 'Made or You',
    link: PagesConfig.MADE_FOR_YOU,
  },
  {
    name: 'Recently Played',
    link: PagesConfig.RECENTLY_PLAYED,
  },
  {
    name: 'Liked Songs',
    link: PagesConfig.LIKED_SONGS,
  },
  {
    name: 'Albums',
    link: PagesConfig.ALBUMS(),
  },
  {
    name: 'Artists',
    link: PagesConfig.ARTISTS(),
  },
  {
    name: 'Podcasts',
    link: PagesConfig.PODCASTS(),
  },
];
