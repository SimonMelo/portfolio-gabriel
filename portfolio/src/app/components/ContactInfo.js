
// src/app/components/Contact.js
'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  return (
    <Box
    style={{
        color: 'white',
    }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        mt: 4,
        gap: 2,
      }}
    >
      <Typography variant="h4" style={{fontweight: 'bold'}} component="div">
        Contato
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'left', gap: 1 }}>
        <EmailIcon />
        <Typography>gmcontatodev@gmail.com</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'left', gap: 1 }}>
        <Link href="https://www.instagram.com/newmell0h_" target="_blank" rel="noopener">
          <InstagramIcon style={{color: 'red'}} />
        </Link>
        <Link href="https://www.linkedin.com/in/gabriel-melo-114046217/" target="_blank" rel="noopener">
          <LinkedInIcon style={{color: 'red'}} />
        </Link>
      </Box>
    </Box>
  );
};

export default Contact;
