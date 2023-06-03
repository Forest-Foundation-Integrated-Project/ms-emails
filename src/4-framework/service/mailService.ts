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

    const params = {
      Source: 'alumnus.testes@gmail.com',
      Template: mailEntity.emailType,
      Destination: {
        ToAddresses: [mailEntity.targetEmail]
      },
      TemplateData: "{\"targetEmail\":\""+mailEntity.targetEmail+"\", \"token\": \""+mailEntity.token+"\"}"
    }

    try {
      const result = await this.ses.sendTemplatedEmail(params).promise()
      console.log(result)

      return true

    } catch (error) {
      console.log(error)

      return false
    }
  }
}
