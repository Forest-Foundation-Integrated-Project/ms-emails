import { IsAlphanumeric, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator'
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

  @IsOptional()
  @IsString()
  @MinLength(6)
  @MaxLength(6)
  @IsAlphanumeric()
  token?: string
}

export type OutputSendMail = Either<IError, boolean>
