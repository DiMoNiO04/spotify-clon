import type { PropsWithChildren } from 'react';
import { AudioPlayer } from '../elements/audioPlayer/AudioPlayer';
import { LeftSidebar } from './leftSidebar/LeftSidebar';
import { RightSidebar } from './rightSidebar/RightSidebar';

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <div className="min-h-screen h-full grid grid-cols-[1fr_4fr_1fr] pb-24">
        <LeftSidebar />
        <main className="px-12 py-layout">{children}</main>
        <RightSidebar />
      </div>
      <AudioPlayer />
    </>
  );
}
