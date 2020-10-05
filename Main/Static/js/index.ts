import { firebaseHelper } from './firebase';

document.getElementById('WorkoutDateButton').addEventListener('click', () => {
  const Date = document.getElementById('WorkoutDate') as HTMLInputElement;
  firebaseHelper.saveWorkoutDate(Date.value);
});
