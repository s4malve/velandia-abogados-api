import { RequestHandler } from 'express'
import { contactFormSchema } from '../schemas'
import { sendMessage } from '../services/sendinblue'

const postMessage: RequestHandler = async (req, res) => {
  try {
    const contactForm = contactFormSchema.parse(req.body)
    const emailResponse = await sendMessage(contactForm)

    console.log(
      '🚀 ~ file: sendMessage.routes.ts ~ line 11 ~ constpostMessage:RequestHandler= ~     console.log(emailResponse)',
      emailResponse
    )

    return res.send(emailResponse)
  } catch (error) {
    console.log(
      '🚀 ~ file: sendMessage.routes.ts ~ line 18 ~ constpostMessage:RequestHandler= ~     console.log(error)',
      error
    )

    return res.status(400).send(error)
  }
}

export default postMessage
