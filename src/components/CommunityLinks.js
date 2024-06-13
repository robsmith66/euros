import React, { useState } from 'react';

function CommunityLinks() {
    const [walletAddress, setWalletAddress] = useState('0xYourEthereumWalletAddressHere');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(walletAddress);
        alert('Address copied to clipboard!');
    };

    return (
        <div className="community bg-black text-white p-4 sm:p-8 md:p-12 text-center flex flex-col items-center justify-center space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">Join Our Community</h2>

            <div className="address-box bg-gray-800 p-4 sm:p-6 md:p-6 rounded mb-4 sm:mb-6 md:mb-8 flex items-center space-x-2 sm:space-x-4">
                <span className="text-lg sm:text-xl md:text-xl mr-2 sm:mr-4">{walletAddress}</span>
                <button 
                    onClick={copyToClipboard} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 md:py-3 px-4 sm:px-6 md:px-6 rounded text-sm sm:text-lg md:text-lg">
                    Copy
                </button>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-4 sm:mb-6 md:mb-8">Liquidity Burned</h2>
            <p className="text-sm sm:text-lg md:text-lg mb-4 sm:mb-6 md:mb-6">Details about the liquidity burned can be found on our Dexscreener profile.</p>

            <div className="social-links flex justify-center space-x-2 sm:space-x-4 md:space-x-6">
                <a 
                    href="https://t.me/yourTelegramChannel" 
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 sm:py-3 md:py-3 px-4 sm:px-6 md:px-6 rounded text-sm sm:text-lg md:text-lg">
                    Telegram
                </a>
                <a 
                    href="https://twitter.com/yourTwitterHandle" 
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 sm:py-3 md:py-3 px-4 sm:px-6 md:px-6 rounded text-sm sm:text-lg md:text-lg">
                    Twitter
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
