import { ContactEntity } from "./contact.entiy";


export default interface ContactUseCaseInterface {
  registerContact(contact: ContactEntity):any;
}