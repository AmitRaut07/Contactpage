import React, { useState } from 'react'
import styles from "./ContactForm.module.css"
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
const ContactForm = () => {
  
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const[text, setText] = useState("");
   const[isFormSubmitted, setFormSubmitted] = useState(false);
 const onSumbitClick=(e)=>{
  e.preventDefault();
  console.log(e);
 setName(e.target[0].value);
 setEmail(e.target[1].value);
 setText(e.target[2].value);
setFormSubmitted(true); 
 }
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btns}>
                <Button text="VIA Support chat" icon={<MdMessage fontSize="24px" />} />
                <Button
                 text="Via call" icon={<MdCall fontSize="24px" />} />
            </div>
            <Button isOutline={true} text="VIA Email Form" icon={<MdEmail fontSize="24px" />} />
             <form onSubmit={onSumbitClick}>
            <div className={styles.main_form}>
               
                <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name='name' />
                </div>
                 <div className={styles.form_control}>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email'/>
                </div>
                 <div className={styles.form_control}>
                    <label htmlFor="text">Text</label>
                   <textarea name="text" id="text" rows='8'></textarea>
                 </div>
                 <div style={{
                        display: 'flex',
                        justifyContent: "end",
                 }}>
                    <Button text="Submit"  />
                 </div>
                
               </div>
               <div className={isFormSubmitted ? styles.showinput : styles.hideinput}>
                {
                  name + " " +email +" "+ text
                }
               </div>
              </form>
        </div>
        <div className={styles.contact_image}>
            <img src="./images/service.svg" alt="" />
        </div>
    </section>
  )
}

export default ContactForm