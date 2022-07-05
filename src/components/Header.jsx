import Button from './Button';

const Header = ({ title, onAdd, renderAddForm }) => {
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button 
        textContent={renderAddForm ? "Close" : "Add"}
        color={renderAddForm ? "red" : "green"}
        onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title: "Define a title prop",
}

export default Header