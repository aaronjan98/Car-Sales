import React from 'react';

import { connect } from 'react-redux';
import { buyItem, removeFeature } from './actions/featureActions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {
//   const sum = props.car.features.map(item => {
//     if(item.price == NaN){
//       return [0];
//     }else{
//     return item.price
//     }
//   })
// console.log('SUM', sum);
//   let reducer = (accumulator, currentValue = 0) => accumulator + currentValue;
//   console.log('ADDITIONAL PRICE:', sum.reduce(reducer));


  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={props.removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={props.buyItem}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, { buyItem, removeFeature })(App);
