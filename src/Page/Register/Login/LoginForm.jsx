import { Box, Button, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegisterRedirect = () => {
    navigate('/register');
  };
  const handleLogin = () => {
    navigate('/dasboard');
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={6} borderWidth="1px" borderRadius="lg" boxShadow="md">
      <Heading mb={6} textAlign="center">Login</Heading>
      <FormControl id="username" mb={4}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Masukkan username"
          focusBorderColor="blue.400"
        />
      </FormControl>
      <FormControl id="password" mb={6}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Masukkan password"
          focusBorderColor="blue.400"
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        onClick={handleLogin}
        _hover={{ bg: 'blue.600' }}
        _active={{ bg: 'blue.700' }}
      >
        Login
      </Button>
      <Text mt={4} textAlign="center" fontSize="sm" color="gray.600">
        Belum punya akun?{' '}
        <Text as="span" color="blue.500" cursor="pointer" onClick={handleRegisterRedirect}>
          Daftar di sini
        </Text>
      </Text>
    </Box>
  );
};

export default LoginForm;
