import { Box, HStack, IconButton, Link, Icon, Text, Drawer, useDisclosure, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

function TopbarLayout({ navigation, children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()
    const navigate = useNavigate()

    return (
        <Box>
            <HStack
                as="nav"
                w={'100vw'}
                bg={'black'}
                color="white"
                padding="1rem"
                justifyContent="space-between"
                alignItems="center"
            >
                <Text fontSize="lg" fontWeight="bold">
                    MyApp
                </Text>

                <IconButton
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label="Toggle Navigation"
                    onClick={onOpen}
                />
            </HStack>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody mt={9}>
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
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Box padding="1rem">{children}</Box>
        </Box>
    )
}

TopbarLayout.propTypes = {
    navigation: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.element.isRequired,
            label: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ).isRequired,
    children: PropTypes.node.isRequired,
}

export default TopbarLayout
