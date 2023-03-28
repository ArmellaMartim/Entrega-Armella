import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>Osteo-Store</h3>
      <div>
        <button>Bastones</button>
        <button>Muñequeras</button>
        <button>Andadores</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
