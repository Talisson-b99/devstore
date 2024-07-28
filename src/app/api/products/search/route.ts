import { NextRequest } from 'next/server'
import { z } from 'zod'

import data from '../data.json'

export async function GET(req: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const { searchParams } = req.nextUrl

  const query = z.string().parse(searchParams.get('q'))

  const products = data.products.filter((product) =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  )

  if (!products) {
    return Response.json({ messge: 'Product not found' }, { status: 400 })
  }

  return Response.json(products)
}
