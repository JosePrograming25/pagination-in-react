import { useState } from 'react'
import ListProducts from './components/ListProducts'
import './App.css'
import Head from './components/Head'
import useData from './hooks/useData'
import Pagination from './components/Pagination'

const App = () => {
  const [pagCurrent, setpagCurrent] = useState(1)
  const { getData } = useData(pagCurrent)

  return (
    <>
      <Head />
      <ListProducts products={getData.products} />
      <Pagination
        pagCurrent={pagCurrent}
        setpagCurrent={setpagCurrent}
        numEndPage={getData.nProducts}
      />
    </>
  )
}

export default App
