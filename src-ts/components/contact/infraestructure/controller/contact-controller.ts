import { Request, Response } from "lambda-api";
import ContactUseCase from "../../application/contact-use-case";

export default class ContactController {
  constructor(private contactUseCase: ContactUseCase) {

  }

  /**
   * getContact
   */
  public getContact({query}: Request, res: Response) {
    console.log(">req,", query)
    return {
      message: "Hola mundo"
    }
  }
}