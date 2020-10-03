import {firebaseConfig} from "../../config.js";
import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseAuthUser = {
    uid: 'pmiV3qeGec0upj1Fq7nV',
    name: 'Ahmed',
    age: 25,
    weight: 80,
    height: "5'5",
    gender: 'Male'
}

class FirebaseHelper {  
    firestore: firebase.firestore.Firestore;

    constructor(){
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }
        this.firestore = firebase.firestore();
    }

    // WorkOut (Page 4)
    saveWorkoutDate = (date: string) => {
        this.firestore.collection("workouts").add({date});
    }

    excersices = () => {
        this.firestore.collection("workouts").doc("IsAwP7iIaevLTKq46X6y").collection(firebaseAuthUser.uid)
    }


}


export const firebaseHelper = new FirebaseHelper()