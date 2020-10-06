import { firebaseHelper } from './firebase';
import { excercises } from '../../serviceWorker';

document.getElementById('WorkoutDateButton').addEventListener('click', () => {
  const Date = document.getElementById('WorkoutDate') as HTMLInputElement;
  firebaseHelper.saveWorkoutDate(Date.value);
});

export const test = excercises.forEach((value) => {
  console.log(value.id);
});
