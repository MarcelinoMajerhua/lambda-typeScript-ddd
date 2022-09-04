import { ContactEntity } from "./contact.entiy";

export interface ContactRepository {
  findContactById(id: string): Promise<ContactEntity>;
  registerContact(contact: ContactEntity): Promise<ContactEntity>;
  listContact(): Promise<ContactEntity[]>;
}