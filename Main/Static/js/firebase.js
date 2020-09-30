import {firebaseConfig} from "../../firebaseConfig";
import app from 'firebase/app';
import 'firebase/firestore';


var Config = {
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  databaseURL: firebaseConfig.databaseURL,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSenderId,
  appId: firebaseConfig.appId,
  measurementId: firebaseConfig.measurementId,
};


class firebase {

    constructor(){
        if(!app.apps.length){
            app.initializeApp(Config);
        }
        this.firestore = app.firestore();
    }

    SaveWorkoutDate = document.getElementById("WorkoutDate").onclick = () => {
        this.firestore.collection("workouts").add();
    }
}

