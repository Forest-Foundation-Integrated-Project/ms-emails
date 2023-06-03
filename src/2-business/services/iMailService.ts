import { IMailEntity } from "../../1-domain/entities/mailEntity"

export const IMailServiceToken = Symbol.for('IMailService')

export interface IMailService {
  send(mailEntity: IMailEntity): Promise<boolean>
}
