import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator'

import { Either } from '../../4-framework/shared/either'
import { IError } from '../../4-framework/shared/iError'
import { Validatable } from './abstractValidatable'

export class InputSendMail extends Validatable<InputSendMail> {
  @IsNotEmpty()
  @IsString()
  targetEmail!: string

  @IsNotEmpty()
  @IsString()
  emailType!: string
}

export type OutputSendMail = Either<IError, boolean>
