import ContactUseCaseInterface from "../domain/contact-use-repository";
import { ContactEntity } from "../domain/contact.entiy";
import { ContactRepository } from "../domain/contact.reporitory";
import { ContactValue } from "../domain/contact.value";


export default class ContactUseCase implements ContactUseCaseInterface {

  constructor(private readonly conctactRepository: ContactRepository) { }

  registerContact(contact: ContactEntity) {
    return new ContactValue(contact)
  }

}