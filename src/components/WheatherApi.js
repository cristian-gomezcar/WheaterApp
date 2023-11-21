import React, { useState, useEffect } from 'react';

const WheatherApi = ({ ciudad }) => {
    const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
    const apiKey = '68db5a8d8335f1c435d70a18568ed2cd';

    const [dataClima, setDataClima] = useState({});
    const [loading, setLoading] = useState(false);

    const fetchClima = async () => {
        setLoading(true);

        try {
            const response = await fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`);

            if (!response.ok) {
               
            } else {
                const data = await response.json();
                setDataClima(data);
            }
        } catch (error) {

        }

        setLoading(false);
    };

    return {
        dataClima,
        loading,
        fetchClima
    };
};

export default WheatherApi;
