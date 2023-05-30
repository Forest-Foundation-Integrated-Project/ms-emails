import { AbstractEntity } from './abstractEntity'

export interface IMailEntity {
  targetEmail: string
  emailType: string
}

export class MailEntity extends AbstractEntity<IMailEntity> {}
