import { format } from 'date-fns';

export const getDayOfTheWeek = () => format(new Date(), "eeee")