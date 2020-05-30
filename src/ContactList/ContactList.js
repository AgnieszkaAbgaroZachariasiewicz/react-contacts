import React, { useState, useEffect } from 'react';
import Contact from '../Contact/Contact'

function ContactList() {
  const [contacts, setContacts] = useState([]);

  const handleFetchContacts = () => {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(json => json.results)
      .then(results => {
        const list = results.map( (result) => {
          return {
            name: `${result.name.first} ${result.name.last}`,
            id: result.login.uuid,
            gender: result.gender,
            age: result.dob.age,
            raw: result
          }
        });
        setContacts(list);
      })
  };

  useEffect( () => {
    handleFetchContacts();
  }, []);

	return (
		<div>
      <ul>
        <div>{contacts.map((contact) => <li key={contact.id}><Contact contact={contact} /></li>)}</div>
      </ul>
		</div>
	);
}

export default ContactList;