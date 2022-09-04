import app, { Request, Response } from "lambda-api";
import * as STATUS from "http-status"
import { ResponseInterface } from "../type/reponse.type";

export default class Api {
  app: any;
  constructor(private readonly reponseInterface: ResponseInterface) {
    this.app = app()
    this.setRoutes()
  }

  setRoutes() {

    this.app.register(require("./contact/infraestructure/route/contact.routes"), { prefix: "/contact" })

    this.app.use((error: Error, req: Request, res: Response, next: any) => {    
      if (error.name === 'RouteError' || error.name === 'MethodError') {
        this.reponseInterface.run(res, STATUS.METHOD_NOT_ALLOWED, error.message)
      } else {
        this.reponseInterface.run(res, STATUS.INTERNAL_SERVER_ERROR, error.message)
      }
      return next()
    })
  }
}