import { getDayOfTheWeek } from '@monorepo/date-utils';
import { diff } from 'json-diff-ts'

const realHotDog = { name: 'Hotdog' }

export const hotDogAI = (input: object) =>
  diff(input, realHotDog).length === 0 ? 'Hotdog' : 'Not Hotdog';

export const canIEatHotdogToday = () =>
  getDayOfTheWeek() === 'Sunday' ? 'Yes, you can!' : "No, you can't :(";