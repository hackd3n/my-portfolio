import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can use the form data (name, email, message) for further processing
    // For simplicity, we'll just log the form data for now
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Clear form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="flex m-auto p-10">
<iframe className='w-[350px] h-[450px] border-2' src="https://cdn.forms-content.sg-form.com/968d4f15-00a7-11ee-8de0-2a608b412f57"/>
    </div>
  );
}

export default Contact;
