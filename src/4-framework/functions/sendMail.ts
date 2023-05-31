import 'reflect-metadata'
import '../ioc/inversify.config'
import { APIGatewayProxyEvent, Context } from 'aws-lambda'

import { httpHandler } from '../utility/httpHandler'
import { httpResponse } from '../utility/httpResponse'
import { InputSendMail } from '../../3-controller/serializers/inputSendMail'
import { SendMailOperator } from '../../3-controller/operators/sendMailOperator'
import { container } from '../shared/ioc/container'

export const handler = httpHandler(async (event: APIGatewayProxyEvent, context: Context) => {
  console.log("Teste 1: ", event.body)

  context.callbackWaitsForEmptyEventLoop = false
  const operator = container.get(SendMailOperator)
  const body = JSON.parse(event?.body as string)

  const input = new InputSendMail(body)
  const result = await operator.exec(input)

  if (result.isLeft()) {
    return httpResponse.badRequest(result.value)
  }

  return httpResponse.ok(result.value)
})
