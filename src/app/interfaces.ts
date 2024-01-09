
export interface Profile {
    name: string;
    firstname: string;
    email?: string; // Optional field
    phone_number: number;
    user?: User
}

export interface Patient {
    id: string;
    gender?: string;
    birth_date?: string;
    profile: Profile;
}

export interface Token {
    acces: string;
    refresh: string;
}

export interface User {
    username: string;
    password: string;
}

export interface Doctor {
    id: number;
    profile: Profile;
    doctors_order_number? : string;
    speciality? : string;
}

export interface Prestation {
    prestation: string;
    price: number;
}

export interface Report {
    prescription: string;
    comments: number;
}

export interface Service {
    date: Date;
    patient: Patient;
    prestation: Prestation;
    report: Report;
}