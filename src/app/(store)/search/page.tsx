import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { api } from '@/data/api'
import { Product } from '@/data/types/products'

async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })
  const products = await response.json()

  return products
}

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { q: string }
}) => {
  if (!searchParams.q) {
    redirect('/')
  }

  const products = await searchProducts(searchParams.q)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{searchParams.q}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
          >
            <Image
              src={product.image}
              width={0}
              height={0}
              alt=""
              sizes="100vw"
              quality={100}
              className="h-[95%] w-[95%] transition-transform duration-200 ease-linear group-hover:scale-105"
            />

            <div className="absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="truncate text-sm">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SearchPage
