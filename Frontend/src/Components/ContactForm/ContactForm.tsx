import './ContactForm.scss'
import { useState, ChangeEvent } from "react";

export default function ContactForm() {
    const [formInfo, setFormInfo] = useState({name: '', email: '', message: ''})

    const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = evt.target
        setFormInfo(prevInfo => ({
            ...prevInfo, [name]: value
        }));
    }

    // Creating a function to stop the modal from toggling when clicking the modal component
    const handleModalClick = (evt: React.MouseEvent<HTMLDivElement>) => {
        // Prevents the click event from bubbling up to the modal overlay
        evt.stopPropagation();
    };

    return (
        <>
            <div className="contactFormBg" onClick={handleModalClick}>
                <h1>Contact Me!</h1>
                <div className='contactSection'>
                    <label htmlFor="">Name</label>
                    <input type="text" value={formInfo.name} name='name' onChange={handleChange} placeholder='Name' required/>
                </div>
                <div className='contactSection'>
                    <label htmlFor="">Email</label>
                    <input type="email" value={formInfo.email} name='email' onChange={handleChange} placeholder='Email' required/>
                </div>
                <div className='contactSection'>
                    <label htmlFor="">Message</label>
                    <textarea id="message" cols={30} rows={5} value={formInfo.message} name='message' onChange={handleChange} required></textarea>
                </div>
            </div>
        </>
    )
}