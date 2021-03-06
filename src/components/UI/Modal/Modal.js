import React, {Component} from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

  // componentWillReceiveProps() {
  //   console.log('[Modal...] WillReceiveProps');
  // }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('nextProps: ', nextProps);
    // console.log('this.props: ', this.props);
    // console.log('nextState: ', nextState);
    // console.log('this.state: ', this.state);
    return nextProps.show !== this.props.show || 
    nextProps.children !== this.props.children;
  }

  // componentWillUpdate () {
  //   console.log('[Modal...] WillUpdate');
  // }

  // componentDidUpdate () {
  //   console.log('[Modal...] DidUpdate');
  // }

  render () {
    return (
      <Aux>
        <Backdrop show={this.props.show } clicked={this.props.modalClosed} />
        <div className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </Aux>
    );
  };
}

export default Modal;