import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

import CartWidget from './cart-widget'
import SearchForm from './search-form'

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href={'/'} className="text-2xl font-extrabold text-white">
          devstore
        </Link>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchForm />
        </Suspense>
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />
        <div className="h-4 w-px bg-zinc-700" />
        <Link href={'/'} className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src={'https://github.com/talisson-b99.png'}
            width={30}
            height={30}
            alt="foto do usuário"
            className="rounded-full"
          />
        </Link>
      </div>
    </div>
  )
}

export default Header
