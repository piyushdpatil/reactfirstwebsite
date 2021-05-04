import React, { useState } from 'react'
import ServiceI from '../Assets/images/service.gif'

const Contact = () => {
    const [input, setInput] = useState({
        fullName: '',
        email: '',
        contact: '',
        message: '',
    });
    const inputEvent = (event) => {
        const { name, value } = event.target;
        setInput((priv) => {
            return {
                ...priv,
                [name]: value,
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`${input.fullName}`)
    }
    return (
        <div className='MainDivC' style={{ backgroundImage: `url(${ServiceI})`, backgroundRepeat: 'no-repeat' }}>
            <h1>Contact Us</h1>
            <div className='ContactDiv'>
                <form onSubmit={formSubmit}>
                    <label>Full Name</label>
                    <input type='text'
                        name='fullName'
                        value={input.fullName}
                        onChange={inputEvent}
                        placeholder='fullname' />
                    <label>Email</label>
                    <input type='email'
                        name='email'
                        value={input.email}
                        onChange={inputEvent}
                        placeholder='example@gmail.com' />
                    <label>Contact Number</label>
                    <input type='number'
                        name='contact'
                        value={input.contact}
                        onChange={inputEvent}
                        placeholder='1234567890' />
                    <label>Message</label>
                    <textarea type='text'
                        name='message'
                        value={input.message}
                        onChange={inputEvent}
                        placeholder='Message' />
                    <button>Submit</button>
                </form>
            </div>

        </div>
    )
}
export default Contact;