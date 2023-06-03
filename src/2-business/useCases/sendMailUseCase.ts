import { injectable, inject } from 'inversify'

import { left, right } from '../../4-framework/shared/either'
import { IUseCase } from './iUseCase'
import { InputSendMailDto, OutputSendMailDto } from '../dto/mailDto'
import { EmailSendingFailed } from '../module/errors/emails'
import { IMailService, IMailServiceToken } from '../services/iMailService'

@injectable()
export class SendMailUseCase implements IUseCase<InputSendMailDto, OutputSendMailDto> {
  public constructor(@inject(IMailServiceToken) private mailService: IMailService) {}

  async exec(input: InputSendMailDto): Promise<OutputSendMailDto> {
    try {
      const emailResult = await this.mailService.send(input)

      return right(emailResult)
    } catch (error) {
      return left(EmailSendingFailed)
    }
  }
}
