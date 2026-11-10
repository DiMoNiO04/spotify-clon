import type { PropsWithChildren } from 'react';
import { AudioPlayer } from '../elements/audioPlayer/AudioPlayer';
import { LeftSidebar } from './leftSidebar/LeftSidebar';

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <div className="min-h-screen h-full grid grid-cols-[2fr_5fr] pb-24">
        <LeftSidebar />
        <main className="px-8 py-layout">{children}</main>
      </div>
      <AudioPlayer />
    </>
  );
}
