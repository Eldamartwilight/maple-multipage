import React from "react";
import ReactPlayer from "react-player";

export default () => {
    return (
        <>
            <h2>Section with player</h2>
            <ReactPlayer
                style={{ margin: "0 auto" }}
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
        </>
    );
};
