import { RequestHandler } from 'express'
import { contactFormSchema } from '../schemas'
import { sendMessage } from '../services/sendinblue'

const postMessage: RequestHandler = async (req, res) => {
  try {
    const contactForm = contactFormSchema.parse(req.body)
    const emailResponse = await sendMessage(contactForm)

    return res.send(emailResponse)
  } catch (error) {
    return res.status(400).send(error)
  }
}

export default postMessage
