import { ContainerModule, interfaces } from 'inversify'
import { SendMailUseCase } from '../../2-business/useCases/sendMailUseCase'

export const UseCasesModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(SendMailUseCase).toSelf()
})
