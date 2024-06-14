import React from 'react';

function StatsDisplay() {
    const mainStats = [
        { label: 'Minutes Played', value: 0 },
        { label: 'Successful Tackles', value: 0 },
        { label: 'Clean Sheets', value: 0 },
    ];

    const tokensBurned = { label: 'Tokens Burned', value: 0 };

    return (
        <div className="bg-yellow-400 text-black p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">$RUDNIGGER Stats</h2>
            
            <div className="flex flex-col items-center mb-8">
                <div className="flex flex-col items-center bg-gray-800 p-6 rounded">
                    <span className="text-lg font-semibold text-white">{tokensBurned.label}</span>
                    <span className="text-3xl font-bold mt-2 text-white">{tokensBurned.value}</span>
                </div>
            </div>

            <div className="flex flex-col space-y-4">
                {mainStats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center bg-gray-800 p-4 rounded">
                        <span className="text-lg font-semibold text-white">{stat.label}</span>
                        <span className="text-3xl font-bold mt-2 text-white">{stat.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StatsDisplay;
