import { AbstractEntity } from './abstractEntity'

export enum EmailTypes {
  confirmEmail = "confirmEmail",
  resetPassword = "resetPassword"
}

export interface IMailEntity {
  targetEmail: string
  emailType: EmailTypes
  token?: string
}

export class MailEntity extends AbstractEntity<IMailEntity> {}
