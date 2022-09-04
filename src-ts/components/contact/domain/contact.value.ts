import { ContactEntity } from "./contact.entiy";
import { v4 as uuid } from "uuid";

export class ContactValue implements ContactEntity {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  constructor({firstName, lastName, phone,email}:{firstName?:string, lastName?:string, phone?:string,email?:string}){
    this.id = uuid();
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
  }
}