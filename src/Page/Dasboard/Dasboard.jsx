import { Box, Card, CardBody, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineAdsClick } from 'react-icons/md'
import LineChart from './lineChart';
import RankAreaChart from './RankAreaChart';


const data = [
    [1609459200000, 30],
    [1609545600000, 40],
    [1609632000000, 35],
    [1609718400000, 45],
    [1609804800000, 55]
    // Dan seterusnya
];

const rankData = [
    { x: 'Area 1', y: 450 },
    { x: 'Area 2', y: 300 },
    { x: 'Area 3', y: 600 },
    { x: 'Area 4', y: 700 },
    { x: 'Area 5', y: 200 },
    { x: 'Area 6', y: 500 },
    { x: 'Area 7', y: 800 },
    { x: 'Area 8', y: 350 },
    { x: 'Area 9', y: 550 },
    { x: 'Area 10', y: 650 }
];


const Dasboard = () => {
    return (
        <Box h={'auto'} w={'full'}>
            <Heading fontSize="3xl" fontWeight="bold" color="black">
                Dashboard
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: '5', md: '6' }} mt={10}>
                <Card align={'center'} border={'1px'} borderColor="gray.100" bg="bg.surface" shadow={'lg'} >
                    <CardBody textAlign="center">
                        <Heading>Form</Heading>
                        <Flex gap={1} align='center'>
                            <Text>Clicks</Text>
                            <MdOutlineAdsClick color='blue' />
                        </Flex>
                    </CardBody>
                </Card>
                <Card align={'center'} border={'1px'} borderColor="gray.100" bg="bg.surface" shadow={'lg'} >
                    <CardBody textAlign="center">
                        <Heading>Form</Heading>
                        <Flex gap={1} align='center'>
                            <Text>Clicks</Text>
                            <MdOutlineAdsClick color='blue' />
                        </Flex>
                    </CardBody>
                </Card>
                <Card align={'center'} border={'1px'} borderColor="gray.100" bg="bg.surface" shadow={'lg'} >
                    <CardBody textAlign="center">
                        <Heading>Form</Heading>
                        <Flex gap={1} align='center'>
                            <Text>Clicks</Text>
                            <MdOutlineAdsClick color='blue' />
                        </Flex>
                    </CardBody>
                </Card>

            </SimpleGrid>
            <Box p={5} border={'1px'} borderColor={'gray.200'} shadow={'lg'} my={5}>

                <LineChart data={data} />

            </Box>
            <Box p={5} border={'1px'} borderColor={'gray.200'} shadow={'lg'} my={5}>

                <RankAreaChart data={rankData} />

            </Box>
        </Box>
    )
}

export default Dasboard