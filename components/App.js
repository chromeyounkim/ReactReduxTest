import React from 'react';
import Counter from './Counters';
import Buttons from './Buttons';
import Option from './Option';

class App extends React.Component {
  render() {
     return (
        <div style={{text-align: center}}>
          <Counter/>
          <Option/>
          <Buttons/>
        </div>
     );
  }

}

export default App;
