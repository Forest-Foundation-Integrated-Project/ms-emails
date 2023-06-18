import { IsAlphanumeric, IsEmail, IsEnum, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

import { Either } from '../../4-framework/shared/either'
import { IError } from '../../4-framework/shared/iError'
import { Validatable } from './abstractValidatable'
import { EmailTypes } from '../../1-domain/entities/mailEntity'

export class InputSendMail extends Validatable<InputSendMail> {
  @IsNotEmpty()
  @IsEmail()
  targetEmail!: string

  @IsNotEmpty()
  @IsEnum(EmailTypes)
  emailType!: EmailTypes

  @IsNotEmpty()
  @IsString()
  @IsAlphanumeric()
  @MinLength(6)
  @MaxLength(6)
  token?: string
}

export type OutputSendMail = Either<IError, boolean>
