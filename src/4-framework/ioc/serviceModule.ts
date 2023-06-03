import { ContainerModule, interfaces } from 'inversify'
import { MailService } from '../service/mailService'
import { IMailService, IMailServiceToken } from '../../2-business/services/iMailService'

export const ServiceModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<IMailService>(IMailServiceToken).to(MailService)
})
