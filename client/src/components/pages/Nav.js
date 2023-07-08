import { Outlet, Link } from "react-router-dom";
import { useContext, Fragment } from "react";
import UserContext from "../../context/userContext";

const Navigation= () => {
  const { user } = useContext(UserContext);

  const authenticated = (
    <Fragment>
      <h2>Hi, { user.username } </h2>
    </Fragment>
  )

  const guest = (
    <Fragment>
      <h2>Welcome! </h2>
    </Fragment> 
  )

    return (
<div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Social Media Application</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarid" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarid">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          < Link className="nav-link" to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Outlet />
</div>

    );
}

export default Navigation;