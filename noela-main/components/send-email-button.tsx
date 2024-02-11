'use client'

export default function SendEmailButton() {
  // const userEmail = 'useremail'
  const sendEmail = async () => {
    const emailData = {
      // to isn't being passed from env vars, troubleshoot later
      // to: userEmail,
      subject: 'Test Email from Next.js',
      text: 'This is a test email sent from a Next.js app.',
    };

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    const data = await response.json();
    console.log(data);
  };

  return <button onClick={sendEmail}>Send Email</button>;
}
