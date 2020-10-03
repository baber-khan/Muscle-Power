export interface FirebaseAuthUser {
    uid: string,
    displayName: string
}

export interface DBUser {
    user: FirebaseAuthUser
    weight: number,
    height: string,
    age: number,
    gender: string
}

export interface Excercise {
    id: string,
    title: string
}

export interface WorkoutDay {
    day: string,
    excersices: Array<Excercise>
    user: FirebaseAuthUser
}

export interface Meal {
    id: string,
    title: string
}

export interface FoodDay {
    meals: Array<Meal>,
    day: string,
    user: FirebaseAuthUser
}

