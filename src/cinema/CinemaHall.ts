import Seat from "./Seat"

export interface CinemaHall{
    name:string,
    rows:number,
    columns:number,
    seats:Seat[]
}