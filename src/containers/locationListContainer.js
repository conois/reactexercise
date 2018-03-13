import React, { Component } from 'react';
import { connect } from 'react-redux'; //conecta con los estados (recibe dos funciones que el resultado de ellas se las agrega al componente)
import { setCity } from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

  handleSelectionLocation = (city) => {
    console.log(`handleSelectionLocation ${city}`);
    this.props.setCity(city)
  }

  render () {
    return (
      <div>
        <LocationList cities = { this.props.cities }
          onSelectedLocation = {this.handleSelectionLocation}>
        </LocationList>
      </div>
    )
  }
}
// esta función nos deja trabajar con las acciones
const mapDispatchToPropsActions = (dispatch) => ({
  setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToPropsActions)(LocationListContainer)