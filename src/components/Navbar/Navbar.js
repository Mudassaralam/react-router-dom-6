import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
function Navbar() {
	return (
		<>
			<div className="header">
				<ul className="ullist">
					<li>
						<NavLink className="link" to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink className="link" to="/about">
							About
						</NavLink>
					</li>
					<li>
						<NavLink className="link" to="/contact">
							Contact
						</NavLink>
					</li>

					<li>
						<NavLink className="link" to="/filter">
							Filter
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
}
export default Navbar;
