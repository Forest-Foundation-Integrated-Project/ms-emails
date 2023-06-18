import { EmailTypes } from "../../1-domain/entities/mailEntity"
import { Either } from "../../4-framework/shared/either"
import { IError } from "../../4-framework/shared/iError"

export interface InputSendMailDto {
  targetEmail: string
  emailType: EmailTypes
  token?: string
}

export type OutputSendMailDto = Either<IError, boolean>
