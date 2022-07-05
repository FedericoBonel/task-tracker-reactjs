
const Button = ({ textContent, onClick, color }) => {
  return (
    <button 
    className='btn' 
    onClick={onClick}
    style={{background:color}}>
      {textContent}
      </button>
  )
}

export default Button