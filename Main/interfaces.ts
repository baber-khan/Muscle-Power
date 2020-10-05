export interface FirebaseAuthUser {
    uid: string,
    displayName: string
}

export interface DBUser extends FirebaseAuthUser {
    weight: number,
    height: string,
    age: number,
    gender: string
}

export interface Excercise {
    id: string,
    title: string
}

export interface CustomDate {
    day: number;
    month: number;
    year: number;
}

export interface WorkoutDay {
    // date: string, // 12/09/2020 12-09-2020

    excersices: Array<Excercise>
    user: FirebaseAuthUser
}

export interface Meal {
    id: string,
    title: string,
    timeOfDay: 'breakfast' | 'lunch' | 'dinner'; 
}

export interface FoodDay {
    meals: Array<Meal>,
    day: string,
    user: FirebaseAuthUser
}

