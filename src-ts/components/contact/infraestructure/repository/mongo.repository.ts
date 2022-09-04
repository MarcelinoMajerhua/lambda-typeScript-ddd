import { ContactEntity } from "../../domain/contact.entiy";
import { ContactRepository } from "../../domain/contact.reporitory";
import ContactModel from "../model/contact.schema";


export default class MongoRespository implements ContactRepository {

  async findContactById(id: string): Promise<ContactEntity> {
    return ContactModel.findById(id);
  }
  async registerContact(contact: ContactEntity): Promise<ContactEntity> {
    return ContactModel.create(contact)
  }
  async listContact(): Promise<ContactEntity[]> {
    return ContactModel.find();
  }
}