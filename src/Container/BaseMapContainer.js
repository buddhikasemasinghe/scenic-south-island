import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, DirectionsService } from '@react-google-maps/api';
import AccomdationLocations from '../Data/Locations';
import { useMaps } from '../Hooks/MapContext';
import MapDirectionRender from './map/MapDirectionRender';
import MapDirectionService from './map/MapDirectionService';

const containerStyle = {
  width: '100%',
  height: '90vh'
};

const initialCenter = {
  lat: -37.618173973303435,//, 
  lng: 144.88791576007955
};


const BaseMapContainer = () => {
  const options = {
    disableDefaultUI: true
  }

  let count = React.useRef(0);

  const [center, setCenter] = useState(initialCenter);
  const [zoom, setZoom] = useState(9);
  const [wayPoints, setWayPoints] = useState(null);
  const [searchDirections, setSearchDirections] = useState(true);

  const mapLocations = useMaps();


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
  }, []);


  const directionsCallback = React.useCallback(res => {
    console.log(count.current);
    if (res !== null) {
      if (res.status === 'OK' && count.current < 6) {
        count.current += 1;
        setWayPoints(res);
      } else {
        count.current = 0;
        console.log('res: ', res);
      }
    }
  }, []);


  useEffect(() => {
    if (mapLocations.length) {
      switch (mapLocations[0].place) {
        case 'home': {
          setCenter(mapLocations[0].location);
          setSearchDirections(true);
          setZoom(6);
          return;
        }
        case 'queenstown': {
          setCenter(mapLocations[0].location);
          setZoom(9);
          setSearchDirections(false);
          setWayPoints(null);
          return;
        }
      }
    }
  }, [mapLocations]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={options}
    >
      {searchDirections && <MapDirectionService directionsCallback={directionsCallback} />}
      {wayPoints !== null && <MapDirectionRender directionResponse={wayPoints} /> }
      {wayPoints == null && <MapDirectionRender directionResponse={null} />}
    </GoogleMap>
  ) : <></>
}

export default React.memo(BaseMapContainer)