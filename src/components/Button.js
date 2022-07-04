
const Button = ({ textContent, onClick }) => {
  return (
    <button className='btn' onClick={onClick}>
      {textContent}
      </button>
  )
}

export default Button