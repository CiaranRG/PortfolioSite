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

    return (
        <>
            <div className="contactFormBg">
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" value={formInfo.name} name='name' onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" value={formInfo.email} name='email' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Message</label>
                    <textarea id="message" cols={30} rows={5} value={formInfo.message} name='message' onChange={handleChange}></textarea>
                </div>
            </div>
        </>
    )
}