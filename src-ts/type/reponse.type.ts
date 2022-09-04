import { Response } from "lambda-api";

export interface ResponseInterface {
  buildMessage(code: number, message: string): any;
  run(res: Response, statusCode: number, message: string): any;
}