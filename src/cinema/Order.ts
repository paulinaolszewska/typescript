import { Ticket } from "./Ticket";
import { User } from "./User";

export interface Order{
user:User,
email:string, 
status:"paid"|"unpaid",
tickets:Ticket[],
}