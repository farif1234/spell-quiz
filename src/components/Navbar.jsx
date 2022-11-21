import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className=" mx-2 pt-2 items-center">
            <div className="navbar bg-primary text-primary-content rounded-3xl">
                <div className="flex-1">
                    <Link
                        to={"/"}
                        className="btn btn-ghost rounded-full normal-case text-3xl"
                    >
                        SpellQuiz
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal menu-compact rounded-full p-1">
                        <li>
                            <Link to={"/"} className=" text-lg ">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={"/dashboard"} className=" text-lg">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to={"/test"} className=" text-lg mx-1">
                                Create Test
                            </Link>
                        </li>
                        <li>
                            <Link to={"/words"} className=" text-lg">
                                Choose Words
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
