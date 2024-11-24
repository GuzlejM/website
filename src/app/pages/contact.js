import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        await axios.post('/api/contact', formData);
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        setErrors({ submit: 'An error occurred. Please try again.', error: error });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
      />
      {errors.message && <p className="error">{errors.message}</p>}

      {errors.submit && <p className="error">{errors.submit}</p>}
      {successMessage && <p className="success">{successMessage}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;