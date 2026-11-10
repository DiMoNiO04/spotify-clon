import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const transformDuration = (duration: number) => dayjs.duration(duration, 'seconds').format('m:ss');
