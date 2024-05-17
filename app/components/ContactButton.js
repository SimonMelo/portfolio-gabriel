'use client'
import React from 'react';
import Button from '@mui/material/Button';

const ContactButton = () => {

  const scrollView = (id, offset = 100) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  const handleView = (event, id) => {
    event.preventDefault()
    scrollView(id, -100)
  }

  return (
    <Button style={{ backgroundColor: "red", fontWeight: "bold" }} variant="contained">
      <a onClick={(e) => handleView(e, "contato")} href="#contato">Entre em contato</a>
    </Button>
  );
};

export default ContactButton;
