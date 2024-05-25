import { Box, Center, Divider, Flex, Text, Input, Button, Spinner } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const TbHeader = [
  { title: "No", w: "10%" },
  { title: "Date", w: "40%" },
  { title: "Action", w: "50%" },
]

const dailyReport = [
  {
    date: "2024-05-01",
  },
  {
    date: "2024-05-02",
  },
  {
    date: "2024-05-03",
  },
  {
    date: "2024-05-04",
  },
  {
    date: "2024-05-04",
  },
  {
    date: "2024-05-04",
  },
  {
    date: "2024-05-04",
  },
];

const FormMachine = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(dailyReport);
  const [isLoading, setIsLoading] = useState(false);

  // Function to search data
  const searchFilter = (query) => {
    setIsLoading(true); // Start loading
    setTimeout(() => {
      if (query === '') {
        setFilteredData(dailyReport);
      } else {
        const filtered = dailyReport.filter(item => item.date.includes(query));
        setFilteredData(filtered);
      }
      setIsLoading(false); // End loading
    }, 500); // Simulate a delay for the search process
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  // Handle search button click
  const handleSearchClick = () => {
    searchFilter(searchQuery);
  };

  return (
    <Box w={'full'} overflow={'auto'}>
      <Box p={5} w={'full'} gap={5}>
        <Text fontSize="3xl" fontWeight="bold" color="black">
          FORM BALOG
        </Text>
        <Divider mb={10} />
        <Flex w="100%" justifyContent="flex-end" mb={5} gap={0}>
          <Input
            w={'40%'}
            placeholder="Search by date"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Button colorScheme="blue" onClick={handleSearchClick}>
            Search
          </Button>
        </Flex>
        <Flex
          w="100%"
          p={4}
          borderRadius="xl"
          border="1px solid"
          borderColor="gray.200"
          bg="gray.100"
          alignItems="center"
          justifyContent="space-between"
          gap={4}
          mb={3}
        >
          {TbHeader.map((header, index) => (
            <Center key={index} w={header.w} align={'center'}>
              {header.title}
            </Center>
          ))}
        </Flex>

        {isLoading ? (
          <Center w="100%" py={10}>
            <Spinner size="xl" />
          </Center>
        ) : (
          filteredData.map((data, index) => (
            <Flex
              key={index}
              p={4}
              mb={2}
              w={'full'}
              shadow="md"
              borderWidth="1px"
              borderRadius="lg"
              alignItems="center"
              fontSize={'md'}
              _hover={{ bg: "blue.50" }}
              gap={4}
            >
              <Center w={'10%'}>{index + 1}</Center>
              <Center w={'40%'}>{data.date}</Center>
              <Flex w={'50%'} gap={3}>
                <Button
                  // flex="1"
                  size={'md'}
                  borderRadius={'lg'}
                  bg={'yellow.400'}
                  color={'white'}
                  borderColor={'gray.100'}
                  fontWeight={'bold'}
                  _hover={{ bg: 'yellow.500' }}
                  p={3}
                  // fontSize={'lg'}
                >
                  DOC
                </Button>
                <Button
                  // flex="1"
                  size={'md'}
                  borderRadius={'lg'}
                  bg={'blue.400'}
                  color={'white'}
                  borderColor={'gray.100'}
                  // fontWeight={'bold'}
                  onClick={() => navigate ('123')}
                  _hover={{ bg: 'blue.500' }}
                  p={2}
                >
                  SIGNATURE
                </Button>
                <Button
                  // flex="1"
                  size={'md'}
                  borderRadius={'lg'}
                  bg={'red.400'}
                  color={'white'}
                  borderColor={'gray.100'}
                  fontWeight={'bold'}
                  _hover={{ bg: 'red.500' }}
                  p={2}
                >
                  DOWNLOAD
                </Button>
              </Flex>
            </Flex>
          ))
        )}
      </Box>
    </Box >
  )
}

export default FormMachine;
