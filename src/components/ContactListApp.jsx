import React from "react";
import './ContactList.css'
import HorizontalNavbar from "./HorizontalNavbar/HorizontalNavbar";
import NavbarAndContactList from "./NavbarAndContactList/NavbarAndContactList";

const ContactListApp = () => {
  return (
    <div>
      <div className="contact-list-app">
      
        <HorizontalNavbar/>
        <NavbarAndContactList/>
      </div>
    </div>
  )
}

export default ContactListApp
