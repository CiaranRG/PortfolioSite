import './ContactForm.scss'
import { useState, ChangeEvent } from "react";
// Importing these for use with formspree
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
    const [formInfo, setFormInfo] = useState({ name: '', email: '', message: '' })
    // This is the state for our form handling
    const [state, handleSubmit] = useForm("xleqzrea");
    if (state.succeeded) {
        return <p className='contactSuccess'>Your message has been sent!</p>;
    }

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
                <form onSubmit={handleSubmit}>
                    <div className='contactSection'>
                        <label htmlFor='name'>Name</label>
                        <input type="text" value={formInfo.name} id='name' name='name' onChange={handleChange} placeholder='Name' required />
                    </div>
                    <div className='contactSection'>
                        <label htmlFor="email">Email</label>
                        <input type="email" value={formInfo.email} id='email' name='email' onChange={handleChange} placeholder='Email' required />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div className='contactSection'>
                        <label htmlFor="message">Message</label>
                        <textarea cols={30} rows={5} value={formInfo.message} id="message" name='message' onChange={handleChange} required></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    <div className="contactButtonDiv">
                        <button type='submit' className='contactSubmit' disabled={state.submitting}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}