import React from "react";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import Instructions from "../atoms/Instructions";

export default function Header({ fetchArtData }) {
    return (
        <div>
            <Heading />
            <Instructions />
            <Button onClick={fetchArtData} text="Get art!" />
        </div>
    );
}