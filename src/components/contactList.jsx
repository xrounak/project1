import React from "react";

const ContactList = (props) => {

    const renderlist = props.contacts.map((contact) => {
        return( <li key={contact.id}>
            <h4>{contact.name} <button>X</button> </h4>  {contact.email} <br />- </li>)
     })


    return(
        <div className="contactList">
            Conatct List
            <ol>
                {renderlist}
            </ol>
        </div>
    );

}

export default ContactList;