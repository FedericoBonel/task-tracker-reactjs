import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, renderAddForm }) => {
  const path = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {path.pathname === "/" && (
        <Button
          textContent={renderAddForm ? "Close" : "Add"}
          color={renderAddForm ? "red" : "green"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Define a title prop",
};

export default Header;
