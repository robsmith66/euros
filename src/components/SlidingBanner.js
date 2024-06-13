import React from 'react';
import './SlidingBanner.css'; // Ensure the CSS file is linked correctly

function SlidingBanner() {
    // A string that repeats the message enough to always cover the screen width
    const message = "$RUDNIGGER ";
    const repeatedMessage = Array(50).fill(message).join('');

    return (
        <div className="sliding-banner">
            <div className="banner-content">{repeatedMessage}</div>
        </div>
    );
}

export default SlidingBanner;
