import { createContext, useContext, useReducer } from 'react';

const MapsContext = createContext(null);

const MapsDispatchContext = createContext(null);

export function MapsProvider({ children }) {
    const [mapState, dispatch] = useReducer(
        mapsReducer,
        initialMapState
    );

    return (
        <MapsContext.Provider value={mapState}>
            <MapsDispatchContext.Provider value={dispatch}>
                {children}
            </MapsDispatchContext.Provider>
        </MapsContext.Provider>
    );
}

export function useMaps() {
    return useContext(MapsContext);
}

export function useMapsDispatch() {
    return useContext(MapsDispatchContext);
}

function mapsReducer(locations, action) {
    switch (action.type) {
        case 'init': {
            return initialMapState.filter(t => t.place === 'home');
        }
        case 'changed': {
            return initialMapState.filter(t => t.place === action.place);
        }
        case 'reset': {
            return initialMapState.filter(t => t.place === action.place);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initialMapState = [
    {
        id: 0,
        place: 'home',
        location: {
            lat: -37.618173973303435,//, 
            lng: 144.88791576007955
        }
    },
    {
        id: 1,
        place: 'queenstown',
        location: {
            lat: -44.98754577737307,//, 
            lng: 168.6656547137253
        }
    },
    {
        id: 2,
        place: 'frans josef',
        location: {
            lat: -37.418173973303435,//, 
            lng: 144.48591576007955
        }
    }
];
