import paginationList from '../utils/paginationList'
import NumberPage from './NumberPage'
import arrowBack from '../assets/arrowBack.svg'
import arrowNext from '../assets/arrowNext.svg'

export default function Pagination ({ pagCurrent, setpagCurrent, numEndPage }) {
  const paginationArray = paginationList(pagCurrent, numEndPage)

  const handleClickNextPage = (e) => {
    setpagCurrent(pagCurrent + 1)
  }
  const handleClickPreviewPage = (e) => {
    setpagCurrent(pagCurrent - 1)
  }
  return (
    <div className='paginationContainer'>
      <button className='numberPage' onClick={handleClickPreviewPage}>
        <img src={arrowBack} alt='<' />
      </button>

      <div className='pagination'>
        {paginationArray.map((el, i) =>
          <NumberPage
            key={i}
            pagCurrent={pagCurrent}
            setpagCurrent={setpagCurrent}
            num={el}
          />)}
      </div>

      <button className='numberPage' onClick={handleClickNextPage}>
        <img src={arrowNext} alt='>' />
      </button>
    </div>
  )
}
