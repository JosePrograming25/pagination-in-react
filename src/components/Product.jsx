export default function Product ({ product }) {
  return (
    <div className='producto'>
      <p>Nombre: {product.nombre}</p>
      <p>Precio: {product.precio}</p>
      <p>Descripcion: {product.descripcion}</p>
    </div>
  )
}
