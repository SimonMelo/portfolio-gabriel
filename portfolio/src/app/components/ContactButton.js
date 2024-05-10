import React from 'react';
import Button from '@mui/material/Button';

const ContactButton = () => {
  return (
    <Button style={{ backgroundColor: "red", fontWeight: "bold" }} variant="contained">
      <a href="#contato">Entre em contato</a>
    </Button>
  );
};

export default ContactButton;
