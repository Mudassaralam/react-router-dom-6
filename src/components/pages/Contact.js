import React from "react";
import { Link, Outlet } from "react-router-dom";

function Contact(){

    return(
        <>
            <h2>Contact Page</h2>
            <p>This is  Contact page</p>
            <Link to='company' >Company</Link><br />
            <Link to='channel' >Channel</Link><br />
            <Link to='others' >Others</Link><br />
            <Outlet></Outlet>
           </>
    )
}
export default Contact;