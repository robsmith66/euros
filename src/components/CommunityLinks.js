import React from 'react';

function CommunityLinks() {
    const walletAddress = 'Coming Soon...';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(walletAddress);
        alert('Address copied to clipboard!');
    };

    return (
        <div className="community bg-black text-white p-4 sm:p-8 md:p-12 text-center flex flex-col items-center justify-center space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">$RUDNIGGER CA:</h2>

            <div className="address-box bg-gray-800 p-4 sm:p-6 md:p-6 rounded mb-4 sm:mb-6 md:mb-8 flex items-center space-x-2 sm:space-x-4">
                <span className="text-lg sm:text-xl md:text-xl mr-2 sm:mr-4">{walletAddress}</span>
                <button 
                    onClick={copyToClipboard} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 md:py-3 px-4 sm:px-6 md:px-6 rounded text-sm sm:text-lg md:text-lg">
                    Copy
                </button>
            </div>

            <div className="social-links flex justify-center space-x-2 sm:space-x-4 md:space-x-6">
                <a 
                    href="https://t.me/+nc5hZuYsrC05OTc0" 
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 sm:py-3 md:py-3 px-4 sm:px-6 md:px-6 rounded text-sm sm:text-lg md:text-lg">
                    Telegram
                </a>
                <a 
                    href="https://x.com/tonirudnigger?s=21" 
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 sm:py-3 md:py-3 px-4 sm:px-6 md:px-6 rounded text-sm sm:text-lg md:text-lg">
                    x
                </a>
                <a 
                    href="https://dexscreener.com/yourProfile" 
                    className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 sm:py-3 md:py-3 px-4 sm:px-6 md:px-6 rounded text-sm sm:text-lg md:text-lg">
                    Dexscreener
                </a>
            </div>
        </div>
    );
}

export default CommunityLinks;
