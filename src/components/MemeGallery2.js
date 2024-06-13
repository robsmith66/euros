import React from 'react';

function MemeGallery2() {
    const memes = [
        '/1.webp',
        '/2.webp',
        '/3.webp',
        '/4.webp'
    ];

    return (
        <div className="gallery bg-yellow-400 text-white p-8">
            <h2 className="text-3xl font-bold text-black text-center mb-6">Community Artwork</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {memes.map((meme, index) => (
                    <div key={index} className="meme">
                        <img src={meme} alt={`Community Meme ${index + 1}`} className="w-full h-auto"
                             onError={(e) => { e.target.onerror = null; e.target.src = "/default-image.png"; }}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MemeGallery2;
