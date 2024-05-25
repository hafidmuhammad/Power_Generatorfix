import { Box, VStack, Link, Icon, Text, Stack, Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

function SidebarLayout({ navigation, children }) {
    const navigate = useNavigate();

    return (
        <Box display="flex" height="full" width='100vw' id="app-container">
            <Box width="20%"
                bg="gray.900"
                color="white"
                fontSize={'sm'}
                p={3}>

                <Flex h={'full'} direction="column" px="4" py="4">
                <Stack spacing={8} flex={1} overflow={'auto'} >
                    <Box fontSize="lg" fontWeight="bold" p={5} align={'center'}>
                        E-MONITORING POWER GENERATOR
                    </Box>
                <Box>
                <Box>Home</Box>
                {navigation.map((item) => (
                <Box
                    key={item.label}
                    display="flex"
                    alignItems="center"
                    padding="1"
                    width="100%"
                    fontSize="lg"
                    _hover={{ bg: 'gray.700', cursor: 'pointer' }}
                    onClick={() => navigate(item.href)}
                >
                    <Icon as={item.icon} marginRight="2" />
                    <Text>{item.label}</Text>
                </Box>
            ))}
                </Box>
                </Stack>

                </Flex>

            </Box>
            <Box flex="1" p="5" h="100vh" overflowY="auto">
                {children}
            </Box>
        </Box>
    )
}

SidebarLayout.propTypes = {
    navigation: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.element.isRequired,
            label: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ).isRequired,
    children: PropTypes.node.isRequired,
}

export default SidebarLayout
