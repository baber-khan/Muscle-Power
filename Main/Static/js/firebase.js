import {firebaseConfig} from "../../config";

import firebase from 'firebase/app';
import 'firebase/firestore'

firebase.initializeApp(firebaseConfig);

class FirebaseHelper {

    constructor(){
        if(!firebase.apps.length){
            firebase.initializeApp(Config);
        }
        this.firestore = firebase.firestore();
    }

    saveWorkoutDate = () => {
        this.firestore.collection("workouts").add();
    }
}

export const firebaseHelper = new FirebaseHelper()