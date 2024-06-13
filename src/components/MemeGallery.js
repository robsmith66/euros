import React from 'react';

function MemeGallery() {
    const memes = [
        '/1.webp',
        '/2.webp',
        '/3.webp',
        '/4.webp'
    ];

    return (
        <div className="gallery bg-red-600 p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-6">$RUDNIGGER Artwork</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {memes.map((meme, index) => (
                    <div key={index} className="meme overflow-hidden rounded-lg shadow-lg">
                        <img src={meme} alt={`Meme ${index + 1}`} className="w-full h-auto"/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MemeGallery;
