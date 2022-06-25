import logo from "../../images/logo.svg";
import Navbar from "react-bootstrap/Navbar";

const Logo = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="Brand" className='w-25'/>
      </div>
      <Navbar.Brand href="#home">Video Club 3.0</Navbar.Brand>
    </div>
  );
};

export default Logo
