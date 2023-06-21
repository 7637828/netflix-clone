
// import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Header = ({name}) => {

    // const navigate = useNavigate();

    // const clickHandler = (e) => {
    //     e.preventDefault();
    //     navigate('/login');
    // }

    return (
        <>
            <header className="topNav">
                <nav className="navbar navbar-expand-md navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
                        </a>
                        <div className="navbar">
                            <form className="d-flex" role="search">
                                <select>
                                    <option>English</option>
                                    <option>Hindi</option>
                                </select>
                                <Link to="/login">
                                <button className="btn btn-danger" >{name}</button>
                                </Link>
                                
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )

}

export default Header