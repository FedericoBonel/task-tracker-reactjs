import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button textContent={"Add"}/>
    </header>
  )
}

Header.defaultProps = {
    title: "Define a title prop",
}

export default Header