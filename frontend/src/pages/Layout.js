import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h3>CCD</h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="./Home"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="./GetAllOrders" className="nav-link">
                  All Orders
                </Link>
              </li>
              {/* <li className="nav-item">
          <Link to="./GetOrderByid" className="nav-link">Get Order By Id</Link>
        </li> */}
              <li className="nav-item">
                <Link to="./AddOrder" className="nav-link">
                  Add Order
                </Link>
              </li>
              {/* <li className="nav-item">
          <Link to="./EditOrder" className="nav-link">Update Order</Link>
        </li> */}
              <li className="nav-item">
                <Link to="./Profile" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
