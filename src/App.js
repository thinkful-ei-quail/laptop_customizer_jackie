import React, { Component } from 'react';
import Main from './Main';
import Total from './Total';
import FeatureOptions from './FeatureOptions'
import './App.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const selected = this.state.selected;
    const total = Total(selected);
    return (
        <Main 
            selected={selected} 
            total={total} 
            USCurrencyFormat={USCurrencyFormat} 
            updateFeature={this.updateFeature} 
        />
    )
  }
}