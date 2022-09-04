import {APIGatewayEvent, APIGatewayProxyCallback, APIGatewayProxyHandler, Context} from 'aws-lambda'
import Api from './components/api'
import CustomResponse from './shared/response/response'

export const main: APIGatewayProxyHandler = async (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallback) => {
  context.callbackWaitsForEmptyEventLoop = false
  const response = new CustomResponse()
  const app = new Api(response)
  return app.app.run(event, context)
}