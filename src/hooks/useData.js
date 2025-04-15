import { useEffect, useState } from 'react'
import fetchApi from '../services/fetchApi'

const defaultObjectStatus = {
  products: [],
  nProducts: null
}

export default function useData (page) {
  const [data, setData] = useState(defaultObjectStatus)

  useEffect(() => {
    setData(fetchApi(page, 8))
  }, [page])

  return {
    getData: data,
    changeData: setData
  }
}
