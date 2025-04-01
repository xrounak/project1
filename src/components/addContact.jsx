import React from "react";

const AddContacts = () => {
    return(
        <div>
            <div>
                <h3>Add Contacts</h3>
                Name  
                <div>
                    <input type="name" name="name" id="name" placeholder="your name" />
                </div>
                <br />
                Email
                <div>
                    <input type="email" name="name" id="name" placeholder="wrok@email"/>
                </div>
                <br />
                <button>Submit</button>
                <br />
                <br />
            </div>
        </div>
    );
}

export default AddContacts;
