import React from 'react';
import { DirectionsRenderer } from '@react-google-maps/api';

const MapDirectionRender = ({directionResponse}) => {
    return (
        <DirectionsRenderer
        // required
        options={{
          directions: directionResponse
        }}
        // optional
        onLoad={directionsRenderer => {
          console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
        }}
        // optional
        onUnmount={directionsRenderer => {
          console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
        }}
      />
    );
}

export default MapDirectionRender;