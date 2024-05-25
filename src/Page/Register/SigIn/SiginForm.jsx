import { Box, Button, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SigninForm = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const formFields = [
    { id: 'username', label: 'Username', type: 'text', placeholder: 'Masukkan username' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'Masukkan email' },
    { id: 'password', label: 'Password', type: 'password', placeholder: 'Masukkan password' },
    { id: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Konfirmasi password' }
  ];

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={8}
      p={6}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
    >
      <Heading mb={6} textAlign="center">Register</Heading>
      {formFields.map((field) => (
        <FormControl id={field.id} mb={4} key={field.id}>
          <FormLabel>{field.label}</FormLabel>
          <Input
            type={field.type}
            value={formState[field.id]}
            onChange={handleChange}
            placeholder={field.placeholder}
            focusBorderColor="blue.400"
            _hover={{ borderColor: 'blue.600' }}
          />
        </FormControl>
      ))}
      <Button
        colorScheme="blue"
        width="100%"
        mb={4}
        _hover={{ bg: 'blue.600' }}
        _active={{ bg: 'blue.700' }}
        // onClick={handleRegister}
      >
        Register
      </Button>
      <Text mt={4} textAlign="center" fontSize="sm" color="gray.600">
        Sudah punya akun?{' '}
        <Text as="span" color="blue.500" cursor="pointer" onClick={handleLoginRedirect} _hover={{ textDecoration: 'underline' }}>
          Login di sini
        </Text>
      </Text>
    </Box>
  );
};

export default SigninForm;
