import express from "express";
const weather = express.Router();
import fetch from 'node-fetch';

// Route to get weather data for a specific city
weather.get('/:city', async (req, res) => {
    const city = req.params.city;
    const apiKey = 'c6756fe79db44a5b81a145046241703'; // Replace 'YOUR_API_KEY' with your WeatherAPI.com API key
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).send('Internal server error');
    }
});

export default weather;
