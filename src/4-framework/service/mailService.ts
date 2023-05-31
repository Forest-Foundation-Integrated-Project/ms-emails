import { injectable } from "inversify";
import { IMailEntity } from "../../1-domain/entities/mailEntity";
import { IMailService } from "../../2-business/services/iMailService";
import { SES } from 'aws-sdk';

@injectable()
export class MailService implements IMailService {
  private readonly ses: SES

  constructor() {
    this.ses = new SES()
  }

  async send(mailEntity: IMailEntity): Promise<boolean> {
    console.log("Teste 4: ", mailEntity)

    const params = {
      Source: 'alumnus.testes@gmail.com',
      Destination: {
        ToAddresses: [mailEntity.targetEmail]
      },
      Message: {
        Body: {
          Text: {
            Data: 'Tesde de Email'
          }
        },
        Subject: {
          Data: 'Email de Teste'
        }
      }
    }

    try {
      const result = await this.ses.sendEmail(params).promise()
      console.log(result)

      return true

    } catch (error) {
      console.log(error)

      return false
    }
  }
}
