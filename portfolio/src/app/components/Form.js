'use client';

import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [problem, setProblem] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = name ? '' : 'Nome é obrigatório';
    tempErrors.email = email ? (/\S+@\S+\.\S+/.test(email) ? '' : 'Email inválido') : 'Email é obrigatório';
    tempErrors.problem = problem ? '' : 'Descrição do problema é obrigatória';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  useEffect(() => {
    setErrors({})
  }, [name, email, problem])

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      const formData = { name, email, problem };
      console.log(formData);
    }
  };

  return (
    <Box
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '15px'
      }}
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '400px', margin: 'auto', marginTop: '50px' }}
    >
      <h1 style={{fontWeight: 'bold'}}>Entre em contato por aqui também!</h1>
      <TextField
        label="Nome"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={!!errors.name}
        helperText={errors.name}
      />
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        label="Descrição do Problema"
        variant="outlined"
        multiline
        rows={4}
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
        error={!!errors.problem}
        helperText={errors.problem}
      />
      <Button style={{ backgroundColor: "red", fontWeight: "bold" }} variant="contained" >
        Enviar
      </Button>
    </Box>
  );
};

export default Form;
