import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <a href="https://github.com/FedericoBonel/task-tracker-reactjs">
        Click here for more information
      </a>
      <h4>Version 1.0.0</h4>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default About;
