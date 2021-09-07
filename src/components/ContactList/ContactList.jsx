import React from 'react';
import './ContactList.css';

const Contacts = ({ contacts, onDeleteContact }) => (
  <ul className="contacts__list">
    {contacts.map(({ name, number, id }) => (
      <li className="contacts__item" key={id}>
        <p className="contacts__name">{name}</p>
        <p className="contacts__number">{number}</p>
        <button className="contacts__btn" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default Contacts;
