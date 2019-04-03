import React, { Component } from 'react';
// importing my component /
import Address from "./Address"

class PersonalInformation extends Component{
    render(){
        return(
            <div>
                {/* data structure */}
                {/*how i was the data to look */}
                <p>ID:{this.props.element.id}</p>
                <p>Name:{this.props.element.name}</p>
                <p>username:{this.props.element.username}</p>
                <p>email:{this.props.element.email}</p>
                {/* my address component */}
                <Address address={this.props.element.address}/>
                <hr/>


            </div>
        );
    }
}

export default PersonalInformation;