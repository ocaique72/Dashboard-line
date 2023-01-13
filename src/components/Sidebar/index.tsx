import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, useBreakpointValue } from '@chakra-ui/react'
import { useSidebarDrawer } from '../../context/sideBarDrawerContext'
import {SideBarNav} from './SideBarNav'

export function SideBar(){

const { isOpen, onClose } = useSidebarDrawer();

   const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false,
   })

   if(isDrawerSideBar){
    return(
        <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerContent>
            <DrawerContent bgColor='gray.800' p='4'>
                <DrawerCloseButton mt='6' />
                <DrawerHeader>Navegação</DrawerHeader>
                <DrawerBody>
                <SideBarNav />
                </DrawerBody>
            </DrawerContent>
        </DrawerContent>
    </Drawer>
    )
   }

    return (
        <Box as='aside' w='64' mr='8'>
            <SideBarNav />
        </Box>
    )}