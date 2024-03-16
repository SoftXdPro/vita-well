import React, { useEffect, useState } from 'react';
import L from 'leaflet';

const MapComponent = ({ userLocation }) => {
    const [map, setMap] = useState(null);
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        const mapInstance = L.map('map').setView([userLocation.latitude, userLocation.longitude], 12);
        setMap(mapInstance);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapInstance);

        return () => {
            if (mapInstance) {
                mapInstance.remove();
            }
        };
    }, [userLocation]);

    useEffect(() => {
        const dummyPlaces = [
            { name: 'Pharmacy A', location: [userLocation.latitude + 0.01, userLocation.longitude + 0.01] },
            { name: 'Pharmacy B', location: [userLocation.latitude - 0.02, userLocation.longitude - 0.02] },
            { name: 'Hospital X', location: [userLocation.latitude + 0.03, userLocation.longitude - 0.03] },
        ];
        setMarkers(dummyPlaces);

        markers.forEach(place => {
            L.marker(place.location).addTo(map).bindPopup(place.name);
        });
    }, [map, markers, userLocation]);

    return (
        <div id="map" style={{ width: '400px', height: '400px' }} className='z-0'></div>
    );
};

export default MapComponent;
