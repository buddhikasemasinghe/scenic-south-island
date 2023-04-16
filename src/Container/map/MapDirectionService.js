import React from 'react';
import { DirectionsService } from '@react-google-maps/api';
import AccomdationLocations from '../../Data/Locations';


const MapDirectionService = ({ directionsCallback }) => {
    return (
        <DirectionsService
            // required
            options={{
                destination: AccomdationLocations.Destination.location,
                origin: AccomdationLocations.Origin.location,
                travelMode: 'DRIVING',
                optimizeWaypoints: true,
                waypoints: [{
                    location: AccomdationLocations.Queenstown.location,
                    stopover: true,

                },
                {
                    location: AccomdationLocations.FransJosef.location,
                    stopover: true,
                },
                {
                    location: AccomdationLocations.ChristChurch.location,
                    stopover: true,
                },
                {
                    location: AccomdationLocations.LakeTekapo.location,
                    stopover: true,
                }
                ]
            }}
            // required
            callback={directionsCallback}
            // optional
            onLoad={directionsService => {
                console.log('DirectionsService onLoad directionsService: ', directionsService)
            }}
            // optional
            onUnmount={directionsService => {
                console.log('DirectionsService onUnmount directionsService: ', directionsService)
            }}
        />
    );
}

export default MapDirectionService;