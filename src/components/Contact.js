//import { useState } from "react";
import React from "react";
//import { useAuth } from "../store/auth";
//import "./Contact.css"



export const Contact = () => {
  
  return (
    <>
      <div className="set">
        <div className="cont">
          {/* contact form content actual  */}
          <section className="section-form">
            <form action="https://formspree.io/f/xpwqrwwv"
                method="POST">

              <h1 className="main-heading">contact us</h1>

              <div>
                <label htmlFor="username">name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  
                  
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  
                  required
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  
                  
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <div>
                <label htmlFor="email">phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  
                  
                  required
                />
              </div>

              <div>
                <button className="cbtn" type="submit">submit</button>
              </div>
            </form>
            
          </section>
        </div>
    </div>
    </>
  );
};
export default Contact;