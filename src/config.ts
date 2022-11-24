import dotenv from 'dotenv'

const { config } = dotenv

config()

export const SENDINBLUE_API_KEY = process.env.SENDINBLUE_API_KEY

export const PORT = process.env.PORT
