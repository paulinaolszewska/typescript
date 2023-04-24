import { Movie} from "./Movie";

export interface Screening{
    movie:Movie, 
    price:number, 
    startDate:Date, 
    endDate:Date
}