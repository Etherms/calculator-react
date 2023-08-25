import React from "react";

export default function Value({ displayedValue, totalValue }) {
    const formattedDisplayedValue = displayedValue ? displayedValue.toLocaleString() : "0";
    const formattedTotalValue = totalValue ? totalValue.toLocaleString() : "0";
    console.log(displayedValue)

    return (
        <div className="value-container">
            <span className="material-symbols-outlined settings-icon">
                settings
            </span>
            <p className="previous__value">{formattedTotalValue}</p>
            <p className="current__value">{formattedDisplayedValue}</p>
        </div>
    );
}
