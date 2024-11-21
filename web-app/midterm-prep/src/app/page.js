"use client"

import { useState } from "react";

//TODO
// add button
// fetch data
// add data to state
//responsiveness
//clear data
//data
//component for empty state -check
//component for data state - check
// error handling - bonus 

// part 1 of page.js
export default function Home() {
    //if useState isnt null, probably fetching or loading data or have data
    //if useState  === data, we can display our data
    const [astronomyData, setAstronomyData] = useState(null);
    const [loading, setLoading] = useState(null);

    async function fetchAstronomyData() {
      //build the function that grabs data
      setLoading(true);
      const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5") //use await because you are waiting for data
      
      const data = await response.json();

      setAstronomyData(data);
      setLoading(false);
    }

    //DisplayAstronomyData.js organism
    const DisplayAstronomyData = () => {
      //display if we have data
      //loading state
      //fulfilled state (data exists)
      //empty state (!data)
      if (loading) return <div>Loading!</div>;

      if (astronomyData) {
        //const dataThatIsFormattedForDisplay = astronomyData.map((entry, i) => (
        const formattedData = JSON.stringify(astronomyData);
        const dataThatIsFormattedForDisplay = [];
        astronomyData.forEach((entry, i) => {
          dataThatIsFormattedForDisplay.push(
          //important stuff
          <article key={i}>
            <img src={entry.url} />
            <h3>{entry.title}</h3>
            <p>{entry.explanation}</p>
          </article>
          );
        });

          return<section>{dataThatIsFormattedForDisplay}</section>
        }

      return(<div>Empty, no data fetched</div>)
    };
    //end of DisplayAstronomyData.js

    const Header = () => {
      //build the UI
      //Button page
      //<button onClick={onClick}>{text}</button>
      return (
      <header>
        Welcome to my midterm prep
        <br />
        <button onClick={fetchAstronomyData}>Fetch!🐕</button>

    
      </header>
      );
    }

    //part 2 of page.js
    //<Header fetchAstronomyData={fetchAstronomyData} />
    //DisplayAstronomyData astronomyData={astronomyData} loading={loading}
    return (
    <div className="m-8">
      <Header />
      <DisplayAstronomyData />
    </div>
  );
}