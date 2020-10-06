import { firebaseHelper } from './firebase';
import { excercises } from '../../serviceWorker';

document.getElementById('WorkoutDateButton').addEventListener('click', () => {
  const Date = document.getElementById('WorkoutDate') as HTMLInputElement;
  firebaseHelper.saveWorkoutDate(Date.value);
});

excercises.forEach((value) => {
  console.log(value.id);
});
