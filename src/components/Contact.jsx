import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setloading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const [notification, setNotification] = useState({
        message: '',
        type: ''
    });

    const handleSubmit = (e) => {
        setloading(true)
        e.preventDefault();

        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formData, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
            .then((response) => {
                setNotification({
                    message: 'Your message has been sent successfully!',
                    type: 'success'
                });
                setloading(false)
                console.log('SUCCESS!', response.status, response.text);
            }, (error) => {
                setNotification({
                    message: 'There was an error sending your message. Please try again later.',
                    type: 'error'
                });
                setloading(false)
                console.log('FAILED...', error);
            });
    };

    return (
        <div className="mx-10 my-10" id='contact'>
            <h1 className="text-2xl font-bold text-gray-600 mb-5">Contact Us</h1>
            <Notification message={notification.message} type={notification.type} />
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <input
                    className="p-2 border border-gray-300 rounded"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    className="p-2 border border-gray-300 rounded"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    className="p-2 border border-gray-300 rounded"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button
                    className={`p-2 rounded text-white ${loading ? 'bg-gray-400' : 'bg-blue-500'}`}
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Sending...' : 'Send'}
                </button>            </form>
            <div className="mt-10">
                <h2 className="text-xl font-semibold text-gray-600 mb-2">Our Location</h2>
                <iframe
                    src={import.meta.env.VITE_MAP_EMBED_URL}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="map"
                ></iframe>
            </div>
        </div>
    );
}

export default Contact;



function Notification({ message, type }) {
    if (!message) return null;

    const notificationStyles = {
        success: 'bg-green-100 text-green-800',
        error: 'bg-red-100 text-red-800'
    };

    return (
        <div className={`p-4 rounded mb-4 ${notificationStyles[type]}`}>
            {message}
        </div>
    );
}

