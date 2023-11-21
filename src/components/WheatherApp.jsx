import React, { useState } from 'react';
import '../styles/WheatherApp.css';
import WheatherApi from './WheatherApi';

export const WheatherApp = () => {
    const [ciudad, setCiudad] = useState('');
    const { dataClima, loading, fetchClima } = WheatherApi({ ciudad });
    const difKelvon = 273.15;

    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (ciudad.length > 0) {
            fetchClima();
        }
    }

    return (
        <div className='container'>
            <h1>Ingrese el nombre de una ciudad</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={ciudad}
                    onChange={handleCambioCiudad}
                    autoFocus
                />
                <button type="submit">Buscar</button>
            </form>
            {loading ? (
                <p>Cargando...</p>
            ) : dataClima.name ? (
                <div>
                    <h2>{dataClima.name}</h2>
                    <p>Temperatura: {parseInt(dataClima?.main?.temp - difKelvon)}°C</p>
                    <p>Condición Meteorológica: {dataClima.weather[0].description}</p>
                    <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} alt="Weather Icon" />
                </div>
            ) : null}
        </div>
    )
}
