import {AiOutlinePlus} from 'react-icons/ai'

function ProductItem({product}) {
  return (
    <div className='relative bg-white flex flex-col gap-y-1 items-center text-center text-sm font-semibold p-3'>
      <button className='absolute top-2 right-2 bg-white border border-gray-200 rounded w-6 h-6 flex items-center justify-center text-brand-color shadow-md transition hover:border-brand-color'>
        <AiOutlinePlus/>
      </button>
      <img src={product.image} alt={product.title} />
      <div className='text-brand-color'>{product.price}</div>
      <div className='text-gray-900'>{product.title}</div>
      <div className='text-gray-500'>{product.alt}</div>
    </div>
  )
}

export default ProductItem