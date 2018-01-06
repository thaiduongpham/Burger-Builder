import React, { Component } from 'react';

import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();

    this.setState({loading: true});

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Duong',
        address: {
          street: 'Street 1',
          zipCode: '12345',
          country: 'Germany'
        },
        email: 'test@test.com',
        deliveryMethod: 'DHL'
      }
    }
    axios.post('/orders.json', order) // create a 'order' node name in firebase
      .then(res => {
        this.setState({loading: false});
        this.props.history.push('/');

        // let queryParams = [];
        // for (let i in this.state.ingredients) {
        //   queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        // }
        // const queryString = queryParams.join('&');
        // this.props.history.push({
        //   pathname: '/checkout',
        //   search: queryString });
      })
      .catch(error => {
        this.setState({loading: false}); 
      });
  };

  render () {
    let form = (
          <form>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <input type="text" name="street" placeholder="Street" />
          <input type="text" name="postal" placeholder="ZIP Code" />
          <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
      );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }

}

export default ContactData;