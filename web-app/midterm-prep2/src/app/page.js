"use client"
import { useState } from "react";
import Header from "../../components/molecules/Header";
import DisplayArtData from "../../components/organisms/DisplayArtData";

export default function Home() {
  const [artData, setArtData] = useState(null);
  const [loading, setLoading] = useState(null);

  async function fetchArtData() {
    setLoading(true);
    const response = await fetch("https://api.artic.edu/api/v1/artworks?limit=5");
    const data = await response.json();
    setArtData(data.data);
    setLoading(false);
  }

  return (
    <div>
      <Header fetchArtData={fetchArtData}/>
      <DisplayArtData artData={artData} loading={loading} />
    </div>
  );
}