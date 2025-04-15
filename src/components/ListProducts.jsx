import Product from './Product'

export default function ListProducts ({ products }) {
  return (
    <div className='listProducts'>
      {products.map(product => {
        return (
          <Product key={product.id} product={product} />
        )
      })}
    </div>
  )
}
