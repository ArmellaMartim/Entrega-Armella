import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to='/'>
        <h3>Osteo-Store</h3>
      </Link>
      <div className="Categories">
        <NavLink to={`/category/andador`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Andadores</NavLink>
        <NavLink to={`/category/baston`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Bastones</NavLink>
        <NavLink to={`/category/muleta`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Muletas</NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
