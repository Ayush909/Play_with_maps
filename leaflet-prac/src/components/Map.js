import React, { Component } from 'react'
import {Map,TileLayer,Marker, Popup} from 'react-leaflet'

class MapLeaflet extends Component {
    state={
        lat: 19.075983,
        lng: 72.877655,
        zoom: 14,
     }
    render() {
        return (
            <Map
                center={[this.state.lat, this.state.lng]} 
                zoom={this.state.zoom} 
                style={{ width: '100%', height: '500px'}}
            >
            <TileLayer
                attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
              
            <Marker position={[19.076003,72.885639]} >
                <Popup>
                    Stock Area 1
                </Popup>
            </Marker>

            <Marker position={[19.080721,72.866391]} >
                <Popup>
                    Stock Area 2
                </Popup>
            </Marker>
            
            <Marker position={[19.079667,72.854860]} >
                <Popup>
                    Stock Area 3
                </Popup>
            </Marker>

            </Map>
            
        )
    }
}

export default MapLeaflet
