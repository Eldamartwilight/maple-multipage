import React, { useState, useEffect, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Loader from "../../components/Loader";
import { apiFetchPageContent } from "../../api";

export default () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const ref = useRef(null);

    console.log("location", location);

    useEffect(() => {
        ref.current.innerHTML = "";
        setLoading(true);
        setError(false);
        apiFetchPageContent(location.pathname)
            .then(response => {
                ref.current.innerHTML = response.content;
            })
            .catch(error => {
                history.replace("/error");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [location.pathname]);
    return (
        <div>
            {loading && <Loader />}
            <div ref={ref} />
        </div>
    );
};
