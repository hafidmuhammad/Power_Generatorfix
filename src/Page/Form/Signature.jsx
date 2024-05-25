import { Box, Button,  FormControl, FormLabel, Heading, Input, useToast, CircularProgress, Card, CardBody, Center, Flex, Divider } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signature = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const [formData, setFormData] = useState([
        { id: 'fullName', label: 'Nama Lengkap', value: '' },
        { id: 'employeeNumber', label: 'Nomor Pekerja', value: '' },
        { id: 'func', label: 'Fungsi', value: '' },
        { id: 'position', label: 'Position', value: '' },
    ]);
    const [loading, setLoading] = useState(false);

    const handleChange = (id, value) => {
        // If input is "employeeNumber", parse the value to number if it's not empty
        if (id === 'employeeNumber' && value !== '') {
            value = parseInt(value); // Parse string to integer
        }
        setFormData(prevFormData => prevFormData.map(item => {
            if (item.id === id) {
                return { ...item, value };
            }
            return item;
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call or any async operation
        setTimeout(() => {
            setLoading(false);
            toast({
                title: "Signature",
                description: "Signature success added",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            // Navigate back to /form
            navigate('/form');
        }, 2000);
    }

    return (
        <Box p={8} w={'full'} >
            <Heading mb={6}>Signature Add</Heading>
            <Card w={'full'} shadow={'xl'} borderRadius={'20px'} border={'1px'} borderColor={'gray.200'}>
                <CardBody>
                    {formData.map((item) => (
                        <FormControl key={item.id} id={item.id} mb={4}>
                            <FormLabel>{item.label}</FormLabel>
                            <Input
                                type={item.id === 'employeeNumber' ? "number" : "text"}
                                placeholder={`Masukkan ${item.label}`}
                                value={item.value}
                                onChange={(e) => handleChange(item.id, e.target.value)}
                            />
                        </FormControl>
                    ))}
                    <Flex w="100%" justifyContent="flex-end" mb={5} gap={0} mt={10}>
                    <Button colorScheme="blue" type="submit" onClick={handleSubmit} w={'20%'}>
                        {loading ? <CircularProgress isIndeterminate size="24px" color="blue" /> : 'Submit'}
                    </Button>
                    </Flex>

                </CardBody>
            </Card>
        </Box>
    )
}

export default Signature
