import React from "react";
import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";

/**
 * @todo Add links
 * @return {*}
 */
export default () => {
    const location = useLocation();
    const path = location.pathname.split("/");
    return (
        <nav className="b-breadcrumbs" aria-label="breadcrumb">
            <ol className="breadcrumb">
                {path.map((fragment, key) => {
                    return (
                        <li key={`fragment-${key}`} className="breadcrumb-item">
                            <span>{fragment}</span>
                            {/*<Link to="/about/something">fragment</Link>*/}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};
