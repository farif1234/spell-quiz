import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>
                        Copyright © 2022 - Faihaan Arif
                        <Link to={"/report"} className=" link link-error mx-4">
                            Report a bug
                        </Link>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
