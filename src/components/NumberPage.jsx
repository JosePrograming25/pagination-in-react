export default function NumberPage ({ num, pagCurrent, setpagCurrent }) {
  const changeActivePage = value => value === pagCurrent ? 'active' : ''

  return (
    <button
      className={`numberPage ${changeActivePage(num)}`}
      onClick={() => setpagCurrent(num)}
    >
      {num}
    </button>
  )
}
