import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import UseContext from "../contexts/UseContext";
import { useSelector,useDispatch } from "react-redux";



const navItems = [
  { page: "home", link: "/" },
  { page: "about", link: "/about" },
  { page: "support", link: "/support" },
  { page: "contact", link: "/contact" },
  { page: "todos", link: "/todos" },
];

function Header() {
 
  const { user,setUser } = useContext(UseContext);
  const logout=()=> {
    setUser(null);
    localStorage.removeItem("user")
  };
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <div className="header ">
      <div className="header-wrapper sticky top-0">
        <h3 className="logo">Amazon</h3>
       
          
          <Link to="/cart">
          <li>
          <i className="fa-solid fa-cart-shopping text-xl cursor-pointer"></i>
          </li>
          </Link>

          {/* <Link to="/signup">
          <li>
          <i className="fa-solid fa-user-plus text-xl "></i>
          </li>
          </Link> */}
        
        {/* <div>
          <button className="login">Log IN</button>
          <button className="signup">Sign Up</button>
        </div> */}
      </div>
    </div>
  );
}
export default Header;