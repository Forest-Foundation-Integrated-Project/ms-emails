import { AbstractEntity } from './abstractEntity'

export interface IMailEntity {
  targetEmail: string
  emailType: string
  token?: string
}

export class MailEntity extends AbstractEntity<IMailEntity> {}
