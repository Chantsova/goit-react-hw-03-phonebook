import './ContactForm.css';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class Form extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      id: uuidv4(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className="submit__form" onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc. "
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor={this.numberInputId}>
          <h2>Number</h2>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <button className="submit__btn" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
