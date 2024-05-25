import { Box, Card, CardBody, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import LineChart from './LineChartgr';
import BarChart from './BarChartsatu';

const Grafik = () => {
  const lineChartData = [
    [1609459200000, 30],
    [1609545600000, 40],
    [1609632000000, 35],
    [1609718400000, 45],
    [1609804800000, 55]
  ];

  const barChartData = [
    {
      x: 'Generator 1',
      y: 55
    },
    {
      x: 'Generator 2',
      y: 75
    },
    {
      x: 'Generator 3',
      y: 60
    },
    {
      x: 'Generator 4',
      y: 80
    },
    {
      x: 'Generator 5',
      y: 95
    }
    // Dan seterusnya
  ];



  return (
    <Box h={'auto'} w={'full'}>
      <Heading fontSize="3xl" fontWeight="bold" color="black">
        Grafik Report
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: '5', md: '6' }} mt={10}>


      </SimpleGrid>
      <Box p={5} gap={10}>
        <Box p={5} border={'1px'} borderColor={'gray.200'} shadow={'lg'} my={5}>
          <Heading size="md" mb={4}>Kinerja Power Generator (Line Chart)</Heading>
          <LineChart data={lineChartData} />
        </Box>
        <Box p={5} border={'1px'} borderColor={'gray.200'} shadow={'lg'} my={5}>
          <Heading size="md" mb={4}>Kinerja Power Generator (Bar Chart)</Heading>
          <BarChart data={barChartData} />
        </Box>

      </Box>
    </Box>
  )
}

export default Grafik