import nodeFetch from 'node-fetch'

import { SENDINBLUE_API_KEY } from '../config'

const SENDINBLUE_BASE_URL = 'https://api.sendinblue.com/v3'
const SENDINBLUE_SMTP_URL = `${SENDINBLUE_BASE_URL}/smtp/email`

type ContactForm = { name: string; email: string; message: string }

export const sendMessage = async ({ email, message, name }: ContactForm) => {
  try {
    const options: any = {
      method: 'POST',
      body: JSON.stringify({
        subject: `[Velandia Abogados]: Mensaje de ${name}`,
        htmlContent: `<html><body><h1>${message}</h1></body></html>`,
        sender: { name, email },
        to: [{ email: 'yovese@gmail.com', name: 'Luz Velandia Sepulveda' }]
      }),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': SENDINBLUE_API_KEY
      }
    }

    const res = await nodeFetch(SENDINBLUE_SMTP_URL, options)
    const data = await res.json()

    if (res.ok) return data

    return await Promise.reject(data)
  } catch (error) {
    console.log(
      '🚀 ~ file: sendinblue.ts ~ line 32 ~ sendMessage ~ error',
      error
    )
    return await Promise.reject(error)
  }
}
