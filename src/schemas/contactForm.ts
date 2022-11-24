import { z } from 'zod'

const contactFormSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'Tu nombre solo puede tener letras',
      required_error: 'Tu nombre es obligatorio'
    })
    .min(3, 'Tu nombre debe tener minimo 3 caracteres'),
  email: z
    .string({ required_error: 'Tu correo es obligatorio' })
    .email('Correo invalido'),
  message: z
    .string({ required_error: 'Tu mensaje es obligatorio' })
    .min(20, 'Tu mensaje debe tener minimo 20 caracteres')
})

export default contactFormSchema
