import React, { Component } from 'react';
import MapmyIndia, {MapMarker} from 'react-mapmyindia';

export class MyMap extends Component {
     render () {
         return (
         	<MapmyIndia>
             	<MapMarker position = {[12.34343,90.5655222]} popupContent = {"My-place"} />
             </MapmyIndia>
         )
     }
}
export default MyMap;
