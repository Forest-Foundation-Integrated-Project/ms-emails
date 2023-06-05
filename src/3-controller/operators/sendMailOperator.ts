import { injectable, inject } from 'inversify'

import { left, right } from '../../4-framework/shared/either'
import { AbstractOperator } from './abstractOperator'
import { InputSendMail, OutputSendMail } from '../serializers/inputSendMail'
import { SendMailUseCase } from '../../2-business/useCases/sendMailUseCase'

@injectable()
export class SendMailOperator extends AbstractOperator<InputSendMail, OutputSendMail> {
  public constructor(@inject(SendMailUseCase) private sendMailUseCase: SendMailUseCase) {
    super()
  }

  protected async run(input: InputSendMail): Promise<OutputSendMail> {
    console.log('Teste 2: ', input)

    const result = await this.sendMailUseCase.exec(input)

    if (result.isLeft()) {
      return left(result.value)
    }

    return right(result.value)
  }
}
