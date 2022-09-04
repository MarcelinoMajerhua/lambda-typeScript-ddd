import { API, RegisterOptions } from "lambda-api";
import ContactUseCase from "../../application/contact-use-case";
import ContactController from "../controller/contact-controller";
import MongoRespository from "../repository/mongo.repository";

const contactRepository = new MongoRespository()
const contactUseCase = new ContactUseCase(contactRepository)
const contactController = new ContactController(contactUseCase)
module.exports = (api: API, _options: RegisterOptions) => {
  api.get(
    "/",
    contactController.getContact
  )
}
