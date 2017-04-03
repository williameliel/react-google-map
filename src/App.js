import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleMap from './GoogleMap';
import PlacesList from './PlacesList';


class App extends Component {
 

  render() {
    return (
    <div className="wrapper">
     
      <GoogleMap />
      
      <PlacesList />
      
      </div> 
    );
  }
}

export default App;