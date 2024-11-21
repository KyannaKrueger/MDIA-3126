"use client"; // Must be the first sentence for Next.js

import { useState } from 'react';

export default function Page() {
    const DATA_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5";
    
    // State for holding fetched media data
    const [data, setData] = useState(null);

    //talking to another surver, use async
    //fetch, similar to promise - return an object
    async function fetchMedia() {
        try {
            const response = await fetch(DATA_URL);
            const data = await response.json();
            console.log(data);
            setData(data); 
        } catch (error) {
            console.error("Failed to fetch data", error);
        }
    }

    const DisplayMedia = () => {
        if (data) {
            let mediaList = [];
            data.forEach((medium, index) => {
                mediaList.push(
                    <li key={index}>
                        <img src={medium.url} alt={medium.title} />
                        <h3>{medium.title}</h3>
                        <p>{medium.explanation}</p>
                    </li>
                );
            });

            return (
                <div className="border-4 border-black p-4">
                    <ul>{mediaList}</ul>
                </div>
            );
        } else {
            return (
                <div className="border-4 border-black p-4">
                    <ul>🍓 No data yet. Click the button to load photos!</ul>
                </div>
            );
        }
    };

    return (
        <div className="p-4 bg-yellow-300">
            <header className="border-4 border-black p-4">
                <h1>Welcome to NASA 🪐</h1>
                <button
                    className="border-neutral-200 bg-white px-6"
                    onClick={fetchMedia}
                >
                    See Photo of the DAY!
                </button>
            </header>
            <h2>Photo of the day below!</h2>
            <DisplayMedia /> 
        </div>
    );
}