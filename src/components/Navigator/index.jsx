import React from "react";
import { Link } from "react-router-dom";

/**
 * @todo Роутинг вынести в константы
 * @return {*}
 */
export default () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/withpage/1">With pages</Link>
            </li>
            <li>
                <Link to="/video">With video</Link>
            </li>
            <li>
                <Link to="/contacts">Contacts</Link>
            </li>
            <li>
                <Link to="/content-from-server/something">
                    Content from server
                </Link>
                <ul>
                    <li>
                        <Link to="/content-from-server/something">
                            Subpage from server
                        </Link>
                        <ul>
                            <li>
                                <Link to="/content-from-server/something/error-page">
                                    Error from server
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/content-from-server/subpage">
                            Subpage from server
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/error">Error</Link>
            </li>
        </ul>
    );
};
