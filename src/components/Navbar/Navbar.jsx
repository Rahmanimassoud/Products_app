import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
    return (
        <nav id="nav">
            <Link to="/" ><button className="btn btn-primary">Home</button></Link>
            <Link to="/about"> <button className="btn btn-primary">About</button></Link>
            <Link to="/products"><button className="btn btn-primary">Products</button></Link>
            
        </nav>
    )
};

export default Navbar;
