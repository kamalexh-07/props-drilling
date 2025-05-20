import { Link } from "react-router-dom";
import image from "../assets/image1.png";

const pagenotfound = () => {
  return (
    <div>
      <h1>This page is not found - Error 404</h1>
      {/* Optional image */}
      <img src={image} alt="404 Not Found" style={{ width: "300px" }} />
      <Link to="/Login">Go to login page</Link>
    </div>
  );
};

export default pagenotfound;