import database from '../data.json'

export default function fetchApi (pag, nDate = 10) {
  const temporal = {
    nProducts: database.nProducts / nDate
  }
  const listPag = Array.from(
    { length: Math.ceil(database.nProducts / nDate) },
    (_, i) => i * nDate
  )
  const initialProduct = listPag[pag - 1]

  if (!pag) {
    temporal.products = database.products.slice(0, 9)
    return temporal
  }
  temporal.products = database.products.slice(initialProduct, initialProduct + nDate)
  return temporal
}
