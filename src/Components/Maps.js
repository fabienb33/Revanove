import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import React, { Component } from 'react';

const mapStyles = {
  width: "90%",
  height: "800px",
  overflowX: "hidden",
  overflowY: "hidden"
 };
 const containerStyle = {
  width: "45%",
  height: "80%"
 };

export class MapContainer extends Component {

    state = {
        showingInfoWindow: true,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
      };

      onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div className="map">
        <Map google={this.props.google} zoom={14} style={mapStyles} initialCenter={{ lat: 44.841225, lng: -0.5800364 }} containerStyle={containerStyle}>
            <Marker onClick={this.onMarkerClick} name={'Kenyatta International Convention Centre'} />
            <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow} onClose={this.onClose} >
                <div> <h4>{this.state.selectedPlace.name}</h4> </div>
            </InfoWindow>
        </Map></div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD64LiEQtrrotJZulQ2R7myoYs1PXD4Pz8'
})(MapContainer);