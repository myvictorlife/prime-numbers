import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  differenceInMilliseconds,
} from 'date-fns';

function pad(n) {
  return n < 10 ? '0' + n : n;
}

function dateConversion(date1, date2) {
  const hours = pad(Math.abs(differenceInHours(date1, date2)));
  const minutes = pad(Math.abs(differenceInMinutes(date1, date2)));
  const seconds = pad(Math.abs(differenceInSeconds(date1, date2)));
  const milliseconds = pad(Math.abs(differenceInMilliseconds(date1, date2)));
  return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

export default dateConversion;
