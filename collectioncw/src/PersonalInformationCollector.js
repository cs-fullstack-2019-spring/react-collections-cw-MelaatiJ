import React, { Component } from 'react';
//
import PersonalInformation from"./PersonalInformation"


class PersonalInformationCollector extends Component{
    render(){
        // collecting data and mapping it so it iterates through each element //
        const PersonalInformationMap = this.props.PIrawData.map((eachElement) => {
            return(<PersonalInformation key={eachElement.id} element={eachElement}/>)
        });
        return(
            <div>
                {PersonalInformationMap}
            </div>
        );
    }
}

export default PersonalInformationCollector;