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
        <ul>
          {navItems.map((ele) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-active" : "not-active"
              }
              key={ele.page}
              to={ele.link}
            >
              <li>{ele.page}</li>
            </NavLink>
          ))}
          {user ? (
            <Link to="/profile">
              <div className="relative group">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTngn9MnT1-3VYuIFnXGynOEWg74866ln_-pOmBXhESuA&s"
                className="w-10 h-10  border-2 rounded-full border-blue-500"
                alt=""
              />
              <button 
              onClick={logout}
              className="bg-black text-white hidden group-hover:block p-2 rounded absolute left-0">Logout</button>
              </div>
             
            </Link>
          ) : (
            <Link to="/login">
              <li>
                <i className="fa-solid fa-right-to-bracket text-xl mr-5 "></i>
              </li>
            </Link>
            
          )}
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
        </ul>
        {/* <div>
          <button className="login">Log IN</button>
          <button className="signup">Sign Up</button>
        </div> */}
      </div>
    </div>
  );
}
export default Header;