import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, DirectionsService, DirectionsRenderer  } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '90vh'
};

const center = {
  lat: -37.618173973303435,//, 
  lng: 144.88791576007955
};

const TripMap = () => {
  const options = {
    disableDefaultUI: true
  }

  let count = React.useRef(0);
  // const [response, setResponse] = React.useState(null);

  const directionsCallback = React.useCallback(res => {
    console.log(count.current);
    if (res !== null) {
      if (res.status === 'OK' && count.current < 2) {
        count.current += 1;
        setDirectionState({response: res});
      } else {
        count.current = 0;
        console.log('res: ', res);
      }
    }
  }, []);

  const defaultDState = {
    origin: '-37.03, 144.23',
    destination: '-37.60282616918162, 144.89206463838119',
    travelMode: 'DRIVING',
    response: null
  };

  const [directionState, setDirectionState] = useState(defaultDState);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyALDDsBVXmghtayQasnjmEmejpno7gU__g",
    options: options
  })


  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={19}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={options}
    >
      { /* Child components, such as markers, info windows, etc. */}
      {directionState != null && <DirectionsService
        // required
        options={{
          destination: directionState.destination,
          origin: directionState.origin,
          travelMode: directionState.travelMode,
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
      }
      {directionState != null && directionState.response !== null && (
          <DirectionsRenderer
            // required
            options={{ 
              directions: directionState.response
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
        )
      }
      <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(TripMap)