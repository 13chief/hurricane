import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

type ContactPayload = {
  name: string
  email: string
  company: string
  phone?: string
  description: string
}

function validatePayload(payload: ContactPayload | null) {
  if (!payload) {
    return 'Missing request data.'
  }

  const { name, email, company, description } = payload

  if (!name || !email || !company || !description) {
    return 'Missing required fields.'
  }

  if (!email.includes('@')) {
    return 'Invalid email address.'
  }

  return null
}

export async function POST(request: Request) {
  const gmailUser = process.env.GMAIL_USER
  const gmailPassword = process.env.GMAIL_APP_PASSWORD
  const contactRecipient = process.env.CONTACT_TO || gmailUser

  if (!gmailUser || !gmailPassword || !contactRecipient) {
    return Response.json(
      { error: 'Email service is not configured.' },
      { status: 500 },
    )
  }

  let payload: ContactPayload | null = null

  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    payload = null
  }

  const validationError = validatePayload(payload)

  if (validationError) {
    return Response.json({ error: validationError }, { status: 400 })
  }

  const { name, email, company, phone, description } = payload as ContactPayload

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  })

  const textLines = [
    'New Test Run Request',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Phone: ${phone || 'N/A'}`,
    '',
    'Description:',
    description,
  ]

  try {
    await transporter.sendMail({
      from: `"Hurricane Traffic" <${gmailUser}>`,
      to: contactRecipient,
      replyTo: email,
      subject: `New Test Run Request - ${company}`,
      text: textLines.join('\n'),
    })

    return Response.json({ ok: true })
  } catch (error) {
    console.error('Contact form email failed', error)
    return Response.json(
      { error: 'Unable to send your request right now.' },
      { status: 500 },
    )
  }
}
