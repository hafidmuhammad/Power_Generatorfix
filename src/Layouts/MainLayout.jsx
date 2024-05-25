import { Box, Icon } from '@chakra-ui/react'
import SidebarLayout from '../Components/Navigation/SidebarLayout'
import TopbarLayout from '../Components/Navigation/TopbarLayout'
import PropTypes from 'prop-types'
import { useBreakpointValue } from '@chakra-ui/react'
import { FaChartLine, FaHome, FaWpforms } from 'react-icons/fa'
import { HiDocumentReport } from 'react-icons/hi'
import { BiUser } from 'react-icons/bi'

function MainLayout({ children }) {
    const isDesktop = useBreakpointValue({ base: false, lg: true })

    const navigation = [
        { icon: FaHome, label: 'Dasboard', href: '/dasboard' },
        { icon: FaChartLine, label: 'Grafik', href: '/grafik' },
        { icon: FaWpforms, label: 'Form', href: '/form' },
        { icon: HiDocumentReport, label: 'Report', href: '/report' },
        { icon: BiUser, label: 'Users', href: '/report' },
    ]

    return (
        <Box height="100vh" position={'relative'} overflow={'hidden'}>
            {isDesktop ? (
                <SidebarLayout navigation={navigation}>
                    {children}
                </SidebarLayout>
            ) : (
                <TopbarLayout navigation={navigation}>
                    {children}
                </TopbarLayout>
            )}
        </Box>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MainLayout
