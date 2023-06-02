import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator'
import { EmailTemplates } from './enum/emailTemplates'

import { Either } from '../../4-framework/shared/either'
import { IError } from '../../4-framework/shared/iError'
import { Validatable } from './abstractValidatable'

export class InputSendMail extends Validatable<InputSendMail> {
  @IsNotEmpty()
  @IsEmail()
  targetEmail!: string

  @IsNotEmpty()
  @IsEnum(EmailTemplates)
  emailType!: string
}

export type OutputSendMail = Either<IError, boolean>
