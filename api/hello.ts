import { BookmateClient } from '../src/index.js'
import cors from '../lib/cors.js'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return cors(
      req,
      new Response("", {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      })
    )
  }


  const body = await req.json();

  // check if cookie is provided in the body
  if (!body.cookie) {
    return cors(
      req, new Response(JSON.stringify({
        message: 'Please provide a cookie',
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    )
  }

  const cookie = body.cookie

  const client = new BookmateClient(cookie)
  const quotes = await client.getQuotes()

  return cors(
    req,
    new Response(JSON.stringify(quotes), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  )
}
