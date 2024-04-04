import React from "react";

const Cards = ({ children }) => {
    return (
        <div className="px-5 p-6 shadow-sm rounded bg-white">{children}</div>
    );
};

export default Cards;
