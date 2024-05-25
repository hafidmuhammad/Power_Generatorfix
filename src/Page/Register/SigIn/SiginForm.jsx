import { Box, Button, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SiginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const handleRegister = () => {
  //   // Logika pendaftaran pengguna dapat ditambahkan di sini
  //   onRegister({ username, password });
  // };

  const handleLoginRedirect = () => {
    navigate('/login');
  };
  return (
    <Box maxW="md" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="lg">
      <Heading mb={4}>Register</Heading>
      <FormControl id="username" mb={4}>
        <FormLabel>Username</FormLabel>
        <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </FormControl>
      <FormControl id="password" mb={6}>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <Button 
        colorScheme="green" 
        // onClick={handleRegister}
        >Register</Button>
      
        <Text mt={4} onClick={handleLoginRedirect} cursor="pointer">
          Sudah punya akun? Login di sini
        </Text>
    </Box>
  )
}

export default SiginForm


