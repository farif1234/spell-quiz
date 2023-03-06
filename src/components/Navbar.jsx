import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "./Auth";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <div className=" mx-2 pt-2 items-center">
            <div className="navbar bg-primary text-primary-content rounded-3xl justify-between">
                <div className="flex-1">
                    <Link
                        to={"/"}
                        className="btn btn-ghost rounded-full normal-case text-3xl"
                    >
                        SpellWell
                    </Link>
                </div>
                {/* <div>
                    <button className="btn btn-secondary mr-2 ">Login</button>
                    <button className="btn btn-secondary ml-2 ">
                        Register
                    </button>
                </div> */}
                <div className="flex-1 justify-end">
                    <ul className="menu menu-horizontal menu-compact rounded-full p-1">
                        {/* <li>
                            <Link to={"/"} className=" text-lg ">
                                Home
                            </Link>
                        </li> */}
                        <li>
                            <Link to={"/dashboard"} className=" text-lg mx-1">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to={"/test"} className=" text-lg mx-1">
                                Create Test
                            </Link>
                        </li>
                        <li>
                            <Link to={"/words"} className=" text-lg mx-1">
                                Choose Words
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                to={"/report"}
                                className=" text-lg bg-error mx-1"
                            >
                                Report a bug
                            </Link>
                        </li> */}
                        <div className="">
                            <div
                                className="btn btn-info text-sm ml-4 "
                                onClick={() => setShowLogin(!showLogin)}
                            >
                                Login/Register
                            </div>
                            {/* Login box */}

                            {showLogin && (
                                <Auth
                                    isLoggedIn={isLoggedIn}
                                    setIsLoggedIn={setIsLoggedIn}
                                />
                            )}
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
