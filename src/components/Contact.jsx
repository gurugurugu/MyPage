import React, { useEffect } from "react";
import { contacts } from "../Data";
import { useState, useContext } from 'react';

import axios from 'axios';
import Popup from "./Popup";


const Contact = () => {
  const [name, setName] = useState('')
  const [email, setemail] = useState('')
  const [textbox, settextbox] = useState('')
  const [popup, setpopup] = useState(false)




  const postData = (e) =>{
    e.preventDefault();
    
    axios.post(`https://mypage-server-9c0z.onrender.com/db/contactinfo`,{
      name,
      email,
      textbox}).then((res) => {
        console.log(res.data)
        setpopup(true)
        console.log(popup)
        setName('')
        setemail('')
        settextbox('')

    
    }).catch()


    

  }

  
  return (
    <div className="container mx-auto mb-7 px-6" id="contact">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">Contact</h2>
        <div className="w-14 h-[3px] rounded-sm bg-blue"></div>
      </div>
      <div className="shadow-lg p-4 max-w-[700px] mx-auto">
        <div className="grid gap-8 sm:grid-cols-3">
          {contacts.map((contact) => {
            const { id, icon, text } = contact;
            return (
              <div className="flex gap-2 items-center flex-col" key={id}>
                <div className="text-blue text-xl">{icon}</div>
                <div className="text-[0.9rem] opacity-80">{text}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex  gap-12 flex-wrap justify-center">
          <form>
            <div>
              <div className="mb-5">
                <input type="text" 
                  className="outline-none bg-transparent border border-solid border-blue p-2 text-[0.9rem]"
                  placeholder="Name"
                  value={name} 
                  onChange={(e)=> setName(e.target.value)}/>
              </div>
              <div className="mb-5">
                <input type="text" 
                      className="outline-none bg-transparent border border-solid border-blue p-2 text-[0.9rem]"
                      placeholder="email"
                      value={email} 
                      onChange={(e)=> setemail(e.target.value)}/>
              </div>
            </div>
            <div>
              <textarea 
              type="text" 
              placeholder="Contact me"
              className="outline-none bg-transparent border border-solid border-blue resize-none text-[0.9rem] p-2 h-40 w-80"
              value={textbox} 
              onChange={(e)=> settextbox(e.target.value)}></textarea>
                <div className="mt-2 text-end">
                  <button className="btn-primary" onClick={postData}>POST</button>
                </div>
            </div>

          </form>
        </div>
      </div>
      <div>
            <Popup trigger={popup} onClose={()=>setpopup(false)}/>
        </div>
    </div>

  );
};

export default Contact;


