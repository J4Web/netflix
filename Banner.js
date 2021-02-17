import React, {useState, useEffect} from 'react';
import axios from './axios';
import "./Banner.css";
import requests from './Request';

function Banner() {

    const [movie, setMovie]= useState([]);
        useEffect(() => {
            async function fetchData()
            {
                const request = await axios.get(requests.fetchNetflixOriginals);
                setMovie(
                    request.data.results[Math.floor(Math.random()*(request.data.results.length-1))
                    ]
                );
                return request;
            };
            fetchData();

        }, []);
        console.log(movie);
const truncate= (string, n)=>
{
    return string?.length >n ? string.substr(0,n-1)+"..." : string;
}

    return (
        <header className="banner" 
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
            backgroundPosition: "center center"            
        }}>
        <div className="banner_contents">
        <h1 className="banner_title">Random Movie Name</h1>
        <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">
            {truncate(`This is a Test description
            This is a Test description
            This is a Test description
            This is a Test description
            This is a Test description
            This is a Test description
            This is a Test description
            This is a Test description
            This is a Test description
            This is a Test description
            This is a Test description
            This is a Test description
            This is a Test description
            This is a Test description
            This is a Test description
            This is a Test description
            This is a Test description
            This is a Test descriptionv`, 150)}
        </h1>
        </div>
            <div className="banner--fadeBottom"></div>
        </header>
    )
}
export default Banner
