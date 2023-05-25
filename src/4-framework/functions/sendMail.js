import AWS from 'aws-sdk';

const ses = new AWS.SES({region: 'us-east-1'});

async function sendMail(event) {
    var datas = JSON.parse(event.body)

    const params = {
        Source: 'alumnus.testes@gmail.com',
        Destination: {
            ToAddresses: [datas.email]
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
    };

    try {
        const result = await ses.sendEmail(params).promise()
        console.log(result)

        return {
            statusCode: 200,
            body: "Deu bom."
        }
    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 500,
        body: "Deu ruim."
    }
}

export const handler = sendMail