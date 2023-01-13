import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../context/sideBarDrawerContext";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {

  const { onOpen } = useSidebarDrawer();

const isWideVersion = useBreakpointValue({
  base: false,
  lg: true,
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1450}
      h="20"
      mx="auto"
      mt="4"
      align="center"
    >
      {!isWideVersion && (
        <IconButton 
        aria-label="Open navigation"
        icon={<Icon as={RiMenuLine} />}
        fontSize='24'
        variant='unstyled'
        onClick={onOpen}
        mr='2'
        >
          
        </IconButton>
      )}
      <Logo />
      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        
        <NotificationNav />
        <Profile  showProfileData={isWideVersion}/>

      </Flex>
    </Flex>
  );
}

