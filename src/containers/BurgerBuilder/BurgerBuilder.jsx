import React, {Component} from 'react';

import Aux from '../../hoc/Auxd.jsx'
import Burger from '../../components/Burger/Burger';
class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        <Aux>
          <Burger/>
          <div>Build Controls</div>
        </Aux>
      </div>
    );
  }
}

export default BurgerBuilder;