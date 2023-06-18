import { IsAlphanumeric, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'

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

  @IsOptional()
  @IsString()
  @Length(6)
  @IsAlphanumeric()
  token?: string
}

export type OutputSendMail = Either<IError, boolean>
