import React from "react";
import {Link} from "react-router-dom";

const TestingPage = () => {
    return(
        <>
            <h1>this is testing page</h1>
            <h2>
                <Link to='/'>Home page</Link>
            </h2>
        </>
    )
}

export default TestingPage
