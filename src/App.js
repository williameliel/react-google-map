import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';


class App extends Component {
  static defaultProps = {
    center: {lat: 40.785091, lng: -73.968285},
    zoom: 12
  };

  render() {
    return (
    <div style={{height:'100vh', width: '100%'}}> 
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      />

    </div>
      
    );
  }
}

export default App;