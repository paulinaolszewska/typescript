import { Screening } from "./Screening";
import Seat from "./Seat";

export interface Ticket{
    screening:Screening, 
    price:"normal"|"reduce",
    seat:Seat
}