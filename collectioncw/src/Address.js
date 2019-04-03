import React, { Component } from 'react';

class Welcome extends Component{
    render(){
        console.log(this.props.address);
        return(
            <div>
                {/* my address components */}
                <p>street:{this.props.address.street}</p>
                <p>Suite:{this.props.address.suite}</p>
                <p>city:{this.props.address.city}</p>
                <p>Zipcode:{this.props.address.zipcode}</p>
                <p>GEO:LAT:{this.props.address.geo.lat} Long:{this.props.address.geo.lng}</p>

            </div>

        );
    }
}
// "address": {
//     "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//         "lat": "-37.3159",
//             "lng": "81.1496"
//     }
export default Welcome;