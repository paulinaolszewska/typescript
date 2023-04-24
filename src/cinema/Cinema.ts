import { CinemaHall } from "./CinemaHall";

export interface Cinema{
    country:string,
    city:string,
    street:string,
    email:string,
    phone:string,
    hours:{
        open:number,
        close:number
    },
    cinemaHalls:CinemaHall[]
} 