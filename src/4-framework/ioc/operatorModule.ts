import { ContainerModule, interfaces } from 'inversify'
import { SendMailOperator } from '../../3-controller/operators/sendMailOperator'

export const OperatorModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(SendMailOperator).toSelf()
})
