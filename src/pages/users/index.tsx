import { Box, Button, Text, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/header/header";
import { SideBar } from "../../components/nav/SideBar";
import { Pagination } from "../../components/Pagination";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justifyContent="space-between" align="center">

            <Heading size="lg" fontWeight="normal">
              Usuarios
            </Heading>

            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine}/>} cursor='pointer'>
              Criar novo
            </Button>
          </Flex>

        <Table colorScheme='whiteAlpha'>
            <Thead>
                <Tr>
                    <Th px='6' color='gray.300' width='8'>
                        <Checkbox isReadOnly colorScheme='pink'/>
                    </Th>
                    <Th>
                        Usuario
                    </Th>
                    <Th>
                        Data de cadastro
                    </Th>
                    <Th w='8'>
                        Settings
                    </Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td px='6' >
                    <Checkbox colorScheme='pink'/>
                    </Td>

                    <Td>
                        <Box>
                            <Text fontWeight='bold'>Caique Araujo</Text>
                            <Text fontSize='sm' color='gray.300'>caique81728@gmail.com</Text>
                        </Box>
                    </Td>
                    <Td>10, Janeiro 2022</Td>
                    <Td> <Button as="a" size="sm" fontSize="sm" colorScheme="purple" cursor='pointer' leftIcon={<Icon as={RiPencilLine}/>}>
              Editar
            </Button></Td>
                </Tr>
            </Tbody>
        </Table>

        <Pagination />

        </Box>
      </Flex>
    </Box>
  );
}
