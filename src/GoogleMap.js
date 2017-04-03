import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

class GoogleMap extends Component {
  static defaultProps = {
    center: {lat: 40.785091, lng: -73.968285},
    zoom: 12
  };
 
 render() {
    return (
      <div className="map"> 
         <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
      );
  }
}
export default GoogleMap;