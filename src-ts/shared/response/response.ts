import { Response } from "lambda-api"
import { ResponseInterface } from "../../type/reponse.type"

export default class CustomResponse implements ResponseInterface {

  buildMessage(code: number, message: string) {
    if (code >= 200 && code <= 300) {
      return message
    } else {
      return {
        error: { message, code }
      }
    }
  }

  run(res: Response, statusCode: number, message: string) {
    const customHeaders = [
      { name: "Access-Control-Allow-Origin", value: "*" },
      { name: "X-XSS-Protection", value: "1; mode=block" },
      { name: "X-Content-Type-Options", value: "nosniff" },
      { name: "Referrer-Policy", value: "no-referrer-when-downgrade" },
      { name: "X-Frame-Options", value: "SAMEORIGIN" },
      { name: "Access-Control-Allow-Credentials", value: "false" },
      { name: "Strict-Transport-security", value: "max-age=31536000; includeSubDomains" },
      { name: "Access-Control-Allow-Methods", value: "GET, PUT, POST, DELETE, OPTIONS,PATCH" }
    ]

    for (const item of customHeaders) {
      res.header(item.name, item.value)
    }

    return res.status(statusCode).json(this.buildMessage(statusCode, message))
  }
}