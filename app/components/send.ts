'use server';

import nodemailer from 'nodemailer';

const env = (name: string): string => {
    if (process.env[name]) {
        return process.env[name]
    }
    throw new Error(`environment variable ${name} undefined.`)
}

const sendEmail = async(formData: FormData) => {
    let response: {error: boolean} = {error: false}
    const rawFormData = {
      note: formData.get('note'),
      name: formData.get('name'),
      response: formData.get('response necessary'),
      contact_info: formData.get('contact'),
      private: formData.get('private')
    }

    const mailer = nodemailer.createTransport({
        host: env('SMTPSERVER'),
        port: env('SMTPPORT'),
        secure: false, // upgrade later with STARTTLS
        auth: {
            user: env('SMTPUSER'),
            pass: env('SMTPTOKEN'),
        },
        tls: {
            ciphers: 'SSLv3',
            rejectUnauthorized: true
            }
    });
                
   await mailer.sendMail({
        from: `THE BAKING FAIRY<${env('SMTPUSER')}>`,
        to: `itsme@alinjohnson.com`,
        subject: `Field Notes from ${rawFormData.name}`,
        text: `You have a new field note! FROM: ${rawFormData.name} FIELD NOTE: ${rawFormData.note} NEED TO RESPOND: ${rawFormData.response} CONTACT_INFO: ${rawFormData.contact_info} KEEP IT PRIVATE: ${rawFormData.private}`,
        html: `
            <!DOCTYPE html>
                <html>
                    <head>
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                            }
                            .container {
                                width: 100%;
                                margin: 0 auto;
                                padding: 20px;
                            }
                            @media only screen and (max-width: 600px) {
                                .container {
                                    width: 100% !important;
                                }
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <p>You have a new field note from ${rawFormData.name}!</p></br>
                            <p>FROM: ${rawFormData.name}</p><br/> 
                            <p>FIELD NOTE: ${rawFormData.note}</p><br/>
                            <p>NEED TO RESPOND: ${rawFormData.response}</p><br/>
                            <p>CONTACT_INFO: ${rawFormData.contact_info}</p><br/>
                            <p>KEEP IT PRIVATE: ${rawFormData.private}</p><br/>
                        </div>
                    </body>
                </html>
            `
    })
    .then((success)=> response = {error: false})
    .catch((err) => response = {error: true});

    return await response;
  }

  export default sendEmail;