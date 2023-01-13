import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps){
    return(
        <Flex align="center">
          {showProfileData && (
            <Box mr="4" textAlign="right">
            <Text>Caique Araujo</Text>
            <Text color="gray.300" fontSize="small">
              caique.9231@gmail.com
            </Text>
          </Box>
          )}

          <Avatar
          src="https://avatars.githubusercontent.com/u/92965546?v=4"
            size="md"
            name="Caique Araujo"
            
          />
        </Flex>
    )
}