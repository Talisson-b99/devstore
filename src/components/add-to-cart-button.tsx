'use client'

import { useCart } from '@/contexts/cart-context'

interface AddToCartButtonProps {
  productId: number
}

const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId)
  }
  return (
    <button
      onClick={handleAddProductToCart}
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}

export default AddToCartButton
