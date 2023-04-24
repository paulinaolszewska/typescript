import { Order } from "./Order";

export interface User{
    email:string, 
    firstname:string, 
    surname:string, 
    password:string, 
    dateCreated:Date, 
    isAdmin:boolean, 
    orders:Order[], 
    phone:string  
}