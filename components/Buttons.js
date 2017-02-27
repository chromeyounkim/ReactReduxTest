import React from 'react';
import {connect}  from 'react-redux';
import {sum, substract } from '../actions';

class Buttons extends React.Component {
   render() {
      return (
             <div>
                <button type="button" onClick={this.props.onSum}> + </button>
                <button type="button" onClick={this.props.onSubtract}> - </button>
             </div>
      );
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      onSum: () => dispatch(sum()),
      onSubtract: () => dispatch(subtract())
   };
}

Buttons = connect(undefined, mapDispatchToProps)(Buttons);

export default Buttons;
