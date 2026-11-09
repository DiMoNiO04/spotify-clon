import { Play } from 'lucide-react';
import styles from './Lyrics.module.scss';

export function Lyrics() {
  return (
    <div className={styles.lyrics}>
      <div className='text-primary font-medium mb-5'>[ Verse 1 ]</div>
      <p>It might not be the right time</p>
      <p className={styles.active}>
        <Play
          fill='var(--color-primary)'
          className={styles.icon}
          size={10}
        />
        I might not be the right one But theres
      </p>
      <div className='text-primary font-medium mb-5'>[ Verse 2 ]</div>
      <p>It might not be the right time</p>
      <p>I might not be the right one But theres</p>
      <div className='text-primary font-medium mb-5'>[ Verse 3 ]</div>
      <p>It might not be the right time</p>
      <p>I might not be the right one But theres</p>
    </div>
  );
}
