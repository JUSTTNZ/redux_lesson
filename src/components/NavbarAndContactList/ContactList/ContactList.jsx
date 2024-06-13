import React, { useEffect, useState } from 'react'
import ContactData from './ContactData';
import './ContactList.css'
const ContactList = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const res = await fetch("https://contact-list-app-7ff85-default-rtdb.firebaseio.com/contact-list.json");
      const data = await res.json();
      console.log(data);
      const contactsData = [];
      for(const key in data) {
        contactsData.push({
          key: key,
          name: data[key].name,
          surname: data[key].surname,
          telephone: data[key].telephone
        });
      }

      setContacts(contactsData);
    }
    fetchContacts();
  },[]);
  return (
    <div className='contact-list'>
      <table>
        <thead>
          <tr>
            <th><p>Profile</p></th>
            <th><p>Name</p></th>
            <th><p>Surname</p></th>
            <th><p>Mobile</p></th>
            <th><p>Action</p></th>

          </tr>
        </thead>
        <ContactData contacts={contacts}/>
      </table>
    </div>
  )
}

export default ContactList
