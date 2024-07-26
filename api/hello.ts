import type { VercelRequest, VercelResponse } from '@vercel/node'
import { BookmateClient } from '../src/index.js'

export default async function handler(req: VercelRequest, res: VercelResponse) {

  if (req.method !== 'POST') {
    res.statusCode = 405
    return res.json({
      message: 'Method not allowed'
    })
  }

  const { cookie = '' } = req.body

  if (!cookie) {
    res.statusCode = 400
    return res.json({
      message: 'Please provide a cookie',
    })
  }

  const client = new BookmateClient(cookie)
  const quotes = await client.getQuotes()

  return res.json(quotes)
}
