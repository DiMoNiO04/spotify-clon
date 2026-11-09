import { LIBRARY_MENU_ITEMS, MENU_ITEMS } from '@/data/menu.data';
import { Menu } from './Menu';

export function LeftSidebar() {
  return (
    <aside className='h-full px-layout py-9 border-r border-player-bg'>
      <Menu items={MENU_ITEMS} />

      <hr className='my-10 border-white/10' />

      <Menu
        items={LIBRARY_MENU_ITEMS}
        title='Your Library'
      />

      <hr className='my-10 border-white/10' />

      <Menu
        items={[]}
        title='Playlists'
      />
    </aside>
  );
}
