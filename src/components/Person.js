import React, { Component } from 'react';

class Person extends Component {

    render() {

        return (
            <>
                <div className="onePerson">
                    <h3>{this.props.lNameOfPerson}, {this.props.fNameOfPerson}</h3>
                    <p>Age: {this.props.ageOfPerson}</p>
                    <p>Hair color: {this.props.hairOfPerson}</p>
                </div>
            </>

        )

    }

}

export default Person;