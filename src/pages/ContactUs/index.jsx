import React, { useState } from "react";

export default () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkMe, setCheckMe] = useState(false);
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
            }}>
            <div className="form-group">
                <label htmlFor="text11">Text</label>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    autoComplete="Off"
                    type="text"
                    className="form-control"
                    id="text11"
                    aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="form-text text-muted">
                    We'll never share this text with anyone else.
                </small>
            </div>
            <div className="form-group">
                <label htmlFor="text22">Text</label>
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    autoComplete="Off"
                    type="text"
                    className="form-control"
                    id="text22"
                />
            </div>
            <div className="form-group form-check">
                <input
                    value={checkMe}
                    onChange={() => setCheckMe(!checkMe)}
                    autoComplete="Off"
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                </label>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};
