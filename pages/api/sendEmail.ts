import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
const myPersonalEmail = process.env.MY_PERSONAL_EMAIL as string;
const myNoelaEmail = process.env.MY_NOELA_EMAIL as string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // to isn't being passed from env vars, troubleshoot later
    // const { to, subject, text } = req.body;
    const { subject, text } = req.body;

    const msg = {
      to: myPersonalEmail,
      from: myNoelaEmail,
      subject,
      text,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        
            // Check if error has a 'response' property
            if (typeof error === 'object' && error !== null && 'response' in error) {
                const axiosError = error as { response: { body: any; }; };
                console.error(axiosError.response.body);
            }
            } else {
            console.error('An unknown error occurred');
            }

      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
